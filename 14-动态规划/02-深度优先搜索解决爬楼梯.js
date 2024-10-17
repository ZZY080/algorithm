/**
 * 搜索
 * @param {*} i
 * @returns
 */
function dfs(i) {
  // 已知dp[1]和dp[2],返回即可
  if (i === 1 || i === 2) {
    return i;
  }
  // dp[i]=dp[i-1]+dp[i-2]
  const count = dfs(i - 1) + dfs(i - 2);
  return count;
}

/**
 * 爬楼梯搜索
 * @param {*} n
 * @returns
 */
function climbingStairDfs(n) {
  return dfs(n);
}

let start = Date.now();
console.log(climbingStairDfs(44));
let end = Date.now();
let consumeTime = (end - start) / 1000;
console.log(consumeTime);
