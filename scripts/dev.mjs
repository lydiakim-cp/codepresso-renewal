/* 개발 중 data.xlsx를 저장하면 문구 생성 과정을 다시 실행한다. */
import { watch } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { spawn } from 'node:child_process';

const root = dirname(fileURLToPath(import.meta.url));
const dataDir = join(root, '..', 'data');
const logoDir = join(root, '..', 'public', 'images', 'clients', 'dark');
const prepareScript = join(root, 'build-i18n.mjs');
const applyScript = join(root, 'apply-i18n-pages.mjs');
const buildLogosScript = join(root, 'build-client-logos.mjs');
const nuxtCli = join(root, '..', 'node_modules', 'nuxt', 'bin', 'nuxt.mjs');

let refreshTimer;
let isRefreshing = false;
let refreshQueued = false;
let logoRefreshTimer;

function refreshContent() {
  if (isRefreshing) {
    refreshQueued = true;
    return;
  }

  isRefreshing = true;
  const task = spawn(process.execPath, [prepareScript], { stdio: 'inherit' });
  task.on('exit', (code) => {
    if (code === 0) {
      const apply = spawn(process.execPath, [applyScript], { stdio: 'inherit' });
      apply.on('exit', (applyCode) => finish(applyCode));
      apply.on('error', () => finish(1));
      return;
    }
    finish(code);
  });
  task.on('error', () => finish(1));
}

function finish(code) {
  isRefreshing = false;
  if (code === 0) console.log('\n[data.xlsx] 문구가 갱신되었습니다. 브라우저를 새로고침하세요.');
  else console.error(`\n[data.xlsx] 문구 갱신에 실패했습니다 (종료 코드: ${code}).`);

  if (refreshQueued) {
    refreshQueued = false;
    refreshContent();
  }
}

watch(dataDir, (_event, filename) => {
  if (filename?.toString() !== 'data.xlsx') return;
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(refreshContent, 300);
});

watch(logoDir, () => {
  clearTimeout(logoRefreshTimer);
  logoRefreshTimer = setTimeout(() => {
    const task = spawn(process.execPath, [buildLogosScript], { stdio: 'inherit' });
    task.on('error', () => console.error('\n[client logos] 목록 갱신에 실패했습니다.'));
  }, 300);
});

console.log('data/data.xlsx 및 고객사 로고 변경 감지 활성화');
const nuxt = spawn(process.execPath, [nuxtCli, 'dev'], { stdio: 'inherit' });

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    nuxt.kill(signal);
    process.exit();
  });
}

nuxt.on('exit', (code) => process.exit(code ?? 0));
