const rl = require('readline').createInterface({ input: process.stdin });
let iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  while ((line = await readline())) {
    let S = line.trim();
    for (let i = 0; i < S.length; i++) {
      let S_Front = S.slice(0, i);
      let S_Center = S.slice(i, i + 1);
      let S_Back = S.slice(i + 1);
      S = S_Front + S_Back + S_Center;
    }
    console.log(S);
  }
})();
