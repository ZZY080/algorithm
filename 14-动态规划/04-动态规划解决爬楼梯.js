/**
 *
 * @param {*} n
 */
function climbingStairDp(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  // 初始化dp表,用于存储子问题的解
  const dp = new Array(n + 1).fill(-1);
  // 初始化状态：预设最小子问题的解
  dp[1] = 1;
  dp[2] = 2;
  // 状态转移:从较小子问题逐步求解较大子问题
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
