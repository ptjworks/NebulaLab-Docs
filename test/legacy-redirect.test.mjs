import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

for (const filename of ['index.html', '404.html']) {
  const html = fs.readFileSync(new URL(`../redirect/${filename}`, import.meta.url), 'utf8');
  const script = /<script>([\s\S]*?)<\/script>/.exec(html)?.[1];
  assert.ok(script, `${filename} must contain the actual browser redirect`);
  const redirect = (pathname, search = '', hash = '') => {
    let destination = null;
    vm.runInNewContext(script, { URL, window: { location: {
      pathname, search, hash, replace(value) { destination = value; },
    } } });
    return destination;
  };
  for (const prefix of ['/NebulaLab-Docs', '/NebulaLab-Docs-compat-check']) {
    test(`${filename}: root and deep links retain queries and fragments for ${prefix}`, () => {
      assert.equal(redirect(prefix), 'https://nebulalab.app/');
      assert.equal(redirect(prefix + '/', '?from=old&x=1', '#start'), 'https://nebulalab.app/?from=old&x=1#start');
      assert.equal(redirect(prefix + '/manual/workflow.html', '?a=1', '#step-2'), 'https://nebulalab.app/manual/workflow.html?a=1#step-2');
      assert.equal(redirect(prefix + '/manual/%E6%95%B0%E6%8D%AE'), 'https://nebulalab.app/manual/%E6%95%B0%E6%8D%AE');
    });
    test(`${filename}: incoming URL-like paths cannot change the fixed destination origin`, () => {
      for (const suffix of ['//evil.test/path', '/https://evil.test/', '/%2f%2fevil.test', '/@evil.test']) {
        assert.equal(new URL(redirect(prefix + suffix, '?next=https://evil.test', '#https://evil.test')).origin, 'https://nebulalab.app');
      }
    });
  }
  test(`${filename}: no unrelated personal Pages paths are redirected`, () => {
    for (const path of ['/', '/other-project/manual', '/NebulaLab-Docs-unrelated/path', '/nebulalab-docs/manual']) {
      assert.equal(redirect(path), null);
    }
    if (filename === '404.html') assert.doesNotMatch(html, /http-equiv="refresh"/);
  });
}
