const rl = require('readline').createInterface({ input: process.stdin });
let iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
function genterateToolPrice(m) {
  let tempArray = [];
  for (let i = 1; i <= m; i++) {
    tempArray.push(i);
  }
  return tempArray;
}
void (async function () {
  // n 玩具种类 ，m压岁钱
  let [n, m] = (await readline()).split(' ').map((item) => parseInt(item));
  // 已有玩具的编号(价格)  编号(1-9000000)
  let toolNums = (await readline()).split(' ').map((item) => parseInt(item));
  // 生成1-m的玩具价格
  let toolPrices = genterateToolPrice(m);
  // 过滤掉已经买的玩具
  for (let i = 0; i < toolNums.length; i++) {
    toolPrices = toolPrices.filter((item) => {
      return item !== toolNums[i];
    });
  }
  // 买的数量
  let count = 0;
  // 总金额
  let sum = 0;
  for (let i = 0; i <= toolPrices.length; i++) {
    if (sum + toolPrices[i] <= m) {
      sum += toolPrices[i];
      count += 1;
    }
  }
  console.log(count);
})();
