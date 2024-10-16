const rl = require('readline').createInterface({ input: process.stdin });
let iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  let m = parseInt(await readline());
  for (let i = 0; i < m; i++) {
    let cardTypeNum = (await readline())
      .split(' ')
      .map((item) => parseInt(item));
  }
})();
