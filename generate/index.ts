// Get the code, escape quotes and merge it with the extension js file.

import * as fs from 'fs';

const generate = async () => {
  const sourceFile = 'dist/coinbase-auto-trader.js';
  const finalFile = 'coinbase-auto-trader.js';

  const sourceCode = await fs.promises.readFile(sourceFile, {
    encoding: 'utf-8'
  });

  const injectingCode = await fs.promises.readFile('generate/injector-base.js', {
    encoding: 'utf-8'
  });

  const escapedCode = `const code = "${sourceCode.replace(/"/g, '\\"')}";`;

  return fs.promises.writeFile(finalFile, escapedCode + injectingCode, {
    encoding: 'utf-8'
  });
};

generate();
