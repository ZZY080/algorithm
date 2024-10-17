/**
 * 爬楼梯
 * @param {*} n
 * @returns
 */
function climbingStairDpComp(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    const tmp = b;
    b = a + b;
    a = tmp;
  }
  return b;
}

let start = Date.now();
console.log(climbingStairDpComp(10040));
let end = Date.now();
let consumeTime = (end - start) / 1000;
console.log(consumeTime);
