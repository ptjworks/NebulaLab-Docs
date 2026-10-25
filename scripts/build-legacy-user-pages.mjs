import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Produce a separate personal Pages artifact. Do not recreate the old Docs
// repository: that would destroy its GitHub repository redirects after transfer.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputArgument = process.argv[2];
if (!outputArgument) throw new Error('Provide an artifact output directory.');
const output = path.resolve(outputArgument);
if (output === root || !output.startsWith(root + path.sep) || fs.existsSync(output)) {
  throw new Error('Use a new output directory inside this checkout.');
}
fs.mkdirSync(output, { recursive: true });
for (const prefix of ['NebulaLab-Docs', 'NebulaLab-Docs-compat-check']) {
  fs.mkdirSync(path.join(output, prefix));
  fs.copyFileSync(path.join(root, 'redirect/index.html'), path.join(output, prefix, 'index.html'));
}
fs.copyFileSync(path.join(root, 'redirect/404.html'), path.join(output, '404.html'));
fs.writeFileSync(path.join(output, '.nojekyll'), '');
fs.writeFileSync(path.join(output, 'index.html'), '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>Documentation links</title><p><a href="https://nebulalab.app/">Nebula Lab documentation</a></p>\n');
console.log(`Legacy personal Pages artifact: ${output}`);
