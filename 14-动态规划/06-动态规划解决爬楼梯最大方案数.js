/**
 * 爬楼梯最大方案数 设dp[i] 为到达第i阶的最大方案数
 * @param {*} n
 */

function climbingStairDp(n) {
  // 初始化dp表,用于存储子问题的解
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  // 转移状态：从较小问题逐步求解较大的问题
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

let start = Date.now();
console.log(climbingStairDp(10040));
let end = Date.now();
let consumeTime = (end - start) / 1000;
console.log(consumeTime);
