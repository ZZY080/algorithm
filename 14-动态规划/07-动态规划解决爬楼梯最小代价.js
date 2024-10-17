/**
 * 爬楼梯最小代价：动态规划
 * @param {*} cost
 */
function minCostClimbingStairDp(cost) {
  const n = cost.length - 1;
  // 初始化dp表，用于存储子问题的解
  const dp = new Array(n + 1);
  // 初始化转移:预设最小子问题的解
  dp[1] = cost[1];
  dp[2] = cost[2];
  // 状态转移：从较小子问题逐步求解较大的问题
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return dp[n];
}

const cost = [1, 10, 1, 3, 4, 6, 10];
console.log(minCostClimbingStairDp(cost));
