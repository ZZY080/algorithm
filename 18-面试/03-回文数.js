const rl = require('readline').createInterface({ input: process.stdin });
let iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const isPalindrome = (str) => {
  let n = str.length;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (str[i - 1] !== str[n - i]) {
      return false;
    } else {
      return true;
    }
  }
};

const isStrongPalindrome = (str) => {
  const n = str.length;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (
      str[i - 1] !== str[Math.floor(n / 2) - i] ||
      str[i - 1] !== str[n - i]
    ) {
      return false; // 不是强回文
    }
  }
  return true; // 是强回文
};

void (async function () {
  let n = parseInt(await readline());
  for (let i = 0; i < n; i++) {
    let s = await readline();
    if (isStrongPalindrome(s)) {
      console.log('QPD');
      continue;
    }
    if (isPalindrome(s)) {
      console.log('PD');
    } else {
      console.log('NPD');
    }
  }
})();

class A {
  static find() {}
}

let a = A();
a.find();
A.find;
