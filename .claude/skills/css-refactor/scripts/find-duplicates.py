#!/usr/bin/env python
"""선언 묶음이 똑같은 규칙을 파일 간에 모아 보여준다(중복 후보 목록).

사용법:  python find-duplicates.py [최소선언수]   (기본 3)
선언 3줄짜리 flex 유틸은 우연히 같을 뿐이다 — 5 이상으로 올려 보면 진짜 중복만 남는다.
"""
import collections
import glob
import re
import sys

floor = int(sys.argv[1]) if len(sys.argv) > 1 else 3
groups = collections.defaultdict(list)

for f in glob.glob('css/**/*.css', recursive=True):
    src = re.sub(r'/\*.*?\*/', '', open(f, encoding='utf-8').read(), flags=re.S)
    src = re.sub(r'@media[^{]*\{', '@MEDIA{', src)
    for m in re.finditer(r'([^{}@]+)\{([^{}]*)\}', src):
        decls = tuple(sorted(d.strip() for d in m.group(2).split(';') if d.strip()))
        if len(decls) >= floor:
            groups[decls].append((f, ' '.join(m.group(1).split())))

for decls, locs in sorted(groups.items(), key=lambda kv: -len(kv[1])):
    if len(locs) < 2:
        continue
    print('--- %d곳 | %s' % (len(locs), ' ;; '.join(decls)[:110]))
    for f, sel in locs:
        print('    %s :: %s' % (f, sel[:90]))
