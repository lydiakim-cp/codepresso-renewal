#!/usr/bin/env python
"""CSS 주석을 파일 첫머리 2줄 + 섹션 구분선 한 줄만 남기고 지운다.

사용법:  python strip-comments.py css/**/*.css   (인자 없으면 css/ 전체)
첫 주석 → '/* 제목\n   설명 첫 문장(95자 이내) */', '===' 배너 → 한 줄, 나머지 → 삭제.
"""
import glob
import os
import re
import sys


def lines_of(comment_body):
    out = [re.sub(r'^\s*\*?\s?', '', l).strip() for l in comment_body.splitlines()]
    return [l for l in out if l and not re.fullmatch(r'[=\-~*]{3,}', l)]


def strip(path):
    src = open(path, encoding='utf-8').read()
    parts, last, first = [], 0, True
    for m in re.finditer(r'/\*.*?\*/', src, re.S):
        parts.append(src[last:m.start()])
        body = lines_of(m.group(0)[2:-2])
        if first:
            first = False
            head = body[0] if body else os.path.basename(path)
            desc = re.split(r'(?<=다\.)\s*', ' '.join(body[1:2]))[0].strip()
            if len(desc) > 95:
                desc = desc[:92].rstrip() + '…'
            parts.append('/* %s\n   %s */' % (head, desc) if desc else '/* %s */' % head)
        elif '===' in m.group(0):
            parts.append('/* %s */' % (body[0] if body else ''))
        last = m.end()
    parts.append(src[last:])

    out = ''.join(parts)
    out = re.sub(r'[ \t]+\n', '\n', out)
    out = re.sub(r'\n{3,}', '\n\n', out)
    out = re.sub(r'\{\n\n', '{\n', out)
    out = re.sub(r'\n\n(\s*\})', r'\n\1', out)      # r'' 필수 — '\n\1'은 \x01을 넣는다
    open(path, 'w', encoding='utf-8').write(out)
    return len(src.splitlines()), len(out.splitlines())


targets = sys.argv[1:] or glob.glob('css/**/*.css', recursive=True)
for f in targets:
    before, after = strip(f)
    print('%-44s %5d -> %5d' % (f, before, after))
