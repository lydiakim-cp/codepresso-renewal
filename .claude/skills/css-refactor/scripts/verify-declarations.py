#!/usr/bin/env python
"""주석·공백만 지웠는지 검증한다 — 선언이 한 글자라도 바뀌면 실패로 찍는다.

사용법:  python verify-declarations.py [기준-리비전]   (기본 HEAD)
중괄호/주석 균형과 정규식 오타 흔적(제어문자)도 함께 본다. 'ALL OK'가 나와야 통과.
의도적으로 규칙을 지운 단계에서는 DECL 줄이 뜨는 게 정상이다 — 그 파일이 지우려던
파일인지 눈으로 확인한다. 반대로 손대지 않은 파일에 DECL이 뜨면 사고다.
"""
import glob
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')  # cp949 콘솔에서 한글·em dash 보호

CTRL = chr(1)
base = sys.argv[1] if len(sys.argv) > 1 else 'HEAD'
flat = lambda s: re.sub(r'\s+', '', re.sub(r'/\*.*?\*/', '', s, flags=re.S))
bad = False

for f in sorted(glob.glob('css/**/*.css', recursive=True)):
    now = open(f, encoding='utf-8').read()
    if now.count('{') != now.count('}'):
        print('BRACE   ', f, now.count('{'), now.count('}'))
        bad = True
    if now.count('/*') != now.count('*/'):
        print('COMMENT ', f)
        bad = True
    if CTRL in now:
        print('CONTROL ', f, '- 정규식 치환에서 제어문자가 들어갔다(치환문에 r-문자열을 써야 한다)')
        bad = True

    # git은 '/'만 받는다. Windows glob이 주는 '\'를 그대로 넘기면 stdout이 조용히 비어
    # 모든 파일이 검사를 건너뛴 채 ALL OK가 찍힌다(실제로 한 번 속았다).
    rev = '%s:%s' % (base, f.replace(chr(92), '/'))
    old = subprocess.run(['git', 'show', rev],
                         capture_output=True, text=True, encoding='utf-8').stdout
    if not old:
        print('NOBASE  ', f, '- 기준 리비전에 없는 파일(신규)')
        continue
    if flat(old) != flat(now):
        print('DECL    ', f, '- 선언이 달라졌다(의도한 삭제인지 직접 확인)')
        bad = True

print('ALL OK' if not bad else 'ISSUES FOUND')
