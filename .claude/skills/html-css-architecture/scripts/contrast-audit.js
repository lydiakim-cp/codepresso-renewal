/*
 * 대비 검수 — 렌더된 페이지에서 "안 보이는 텍스트"를 찾는다.
 *
 * 눈으로 놓치기 쉬운 유형을 기계로 잡는다.
 *   ① 글자색 == 배경색 (흰 판 + 흰 글씨 같은 사고)
 *   ② 본문 대비 4.5 미달 / 큰 글씨(24px+ 또는 19px+ bold) 3.0 미달 (WCAG AA)
 *   ③ 카드가 자기 부모 면과 같은 색 (경계가 사라져 카드가 안 보인다)
 *
 * 쓰는 법 — 페이지에 붙여 콘솔/타이틀로 결과를 받는다.
 *   node로 직접 실행하지 않는다. headless Chrome에서 페이지에 주입한다.
 */
(() => {
  const parse = (c) => {
    const m = c.match(/[\d.]+/g);
    if (!m) return null;
    const a = m.length > 3 ? parseFloat(m[3]) : 1;
    return { r: +m[0], g: +m[1], b: +m[2], a };
  };

  // 반투명 배경은 부모 위로 합성해 실제 보이는 색을 구한다.
  //
  // 한계 — background-image(그라디언트)와 ::before로 칠한 면은 계산색이 없다.
  // 그런 조상을 만나면 색을 단정하지 않고 null을 돌려 그 요소를 건너뛴다
  // (안 그러면 어두운 그라디언트 섹션의 흰 글씨가 전부 INVISIBLE로 잡힌다).
  const effectiveBg = (el) => {
    let node = el;
    let acc = null;
    while (node && node !== document.documentElement.parentNode) {
      const ncs = getComputedStyle(node);
      if (ncs.backgroundImage && ncs.backgroundImage !== 'none') return null;
      const bg = parse(ncs.backgroundColor);
      if (bg && bg.a > 0) {
        acc = acc
          ? { r: acc.r + (bg.r - acc.r) * (1 - acc.a), g: acc.g + (bg.g - acc.g) * (1 - acc.a), b: acc.b + (bg.b - acc.b) * (1 - acc.a), a: 1 }
          : bg;
        if (acc.a >= 1) return acc;
      }
      node = node.parentElement;
    }
    return acc || { r: 255, g: 255, b: 255, a: 1 };
  };

  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => {
    const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  };
  const near = (a, b) => Math.abs(a.r - b.r) < 8 && Math.abs(a.g - b.g) < 8 && Math.abs(a.b - b.b) < 8;

  const name = (el) => {
    const c = (el.className || '').toString().split(' ').filter(Boolean)[0];
    return el.tagName.toLowerCase() + (c ? '.' + c : '');
  };

  const out = [];

  // ①② 텍스트 대비
  document.querySelectorAll('body *').forEach((el) => {
    const txt = Array.from(el.childNodes)
      .filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join('');
    if (!txt) return;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;

    const fg = parse(cs.color);
    if (!fg) return;
    const bg = effectiveBg(el);
    if (!bg) return;   // 배경을 확정할 수 없는 자리(그라디언트·의사요소)는 눈으로 본다
    // 반투명 글자는 배경 위로 합성
    const on = fg.a < 1
      ? { r: bg.r + (fg.r - bg.r) * fg.a, g: bg.g + (fg.g - bg.g) * fg.a, b: bg.b + (fg.b - bg.b) * fg.a }
      : fg;

    const size = parseFloat(cs.fontSize);
    const bold = +cs.fontWeight >= 700;
    const large = size >= 24 || (size >= 19 && bold);
    const min = large ? 3.0 : 4.5;
    const cr = ratio(on, bg);

    if (near(on, bg)) {
      out.push({ lvl: 'INVISIBLE', el: name(el), txt: txt.slice(0, 20), ratio: cr.toFixed(2) });
    } else if (cr < min) {
      out.push({ lvl: 'LOW', el: name(el), txt: txt.slice(0, 20), ratio: cr.toFixed(2), need: min });
    }
  });

  // ③ 카드가 부모 면과 같은 색인가 (테두리·그림자도 없을 때만 문제)
  document.querySelectorAll('[class*="card"], [class*="panel"], li[class]').forEach((el) => {
    const cs = getComputedStyle(el);
    const own = parse(cs.backgroundColor);
    if (!own || own.a === 0) return;
    const hasEdge = parseFloat(cs.borderTopWidth) > 0 || cs.boxShadow !== 'none';
    if (hasEdge) return;
    const parentBg = el.parentElement ? effectiveBg(el.parentElement) : null;
    if (parentBg && own.a >= 1 && near(own, parentBg)) {
      out.push({ lvl: 'FLAT', el: name(el), txt: '(카드가 부모 면과 동일)', ratio: '1.00' });
    }
  });

  const seen = new Set();
  const uniq = out.filter((o) => {
    const k = o.lvl + o.el + o.txt;
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });
  document.title = 'AUDIT ' + JSON.stringify(uniq);
  return uniq;
})();
