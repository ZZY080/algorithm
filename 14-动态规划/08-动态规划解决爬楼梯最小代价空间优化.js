/**
 * 爬楼梯最小代价：动态规划
 * @param {*} cost
 */
function minCostClimbingStairDpComp(cost) {
  const n = cost.length - 1;
  // 初始化转移:预设最小子问题的解
  if (n === 1 || n === 2) {
    return cost[n];
  }
  let a = cost[1];
  let b = cost[2];
  // 状态转移：从较小子问题逐步求解较大的问题
  for (let i = 3; i <= n; i++) {
    const temp = b;
    b = Math.min(a, temp) + cost[i];
    a = temp;
  }
  return b;
}

const cost = [1, 10, 1, 3, 4, 6, 10];
console.log(minCostClimbingStairDpComp(cost));
