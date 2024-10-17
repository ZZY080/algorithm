const rl = require('readline').createInterface({ input: process.stdin });
let iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

async function guessPassword(secret, allowedGuesses) {
  // 遍历用户的每次猜测
  for (let i = 0; i < allowedGuesses; i++) {
    let guess = (await readline()).trim();
    if (guess === secret) {
      return 'You guessed the secret password correctly.';
    }
  }
  return 'Either you took too many guesses, or you did not find the secret password.';
}

void (async function () {
  while (true) {
    let secret = await readline();
    let allowedGuesses = parseInt((await readline()).trim());
    console.log(await guessPassword(secret, allowedGuesses)); // 输出结果
  }
})();
