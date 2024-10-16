function minSquareTiles(n, m) {
  // 创建 dp 数组，用于存储最优解
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(Infinity));

  // 定义递归函数来计算 n*m 区域的最少铺设地板数
  function coverGrid(n, m) {
    // 如果面积为0，返回0
    if (n === 0 || m === 0) {
      return 0;
    }
    // 如果已经计算过 dp[n][m]，直接返回
    if (dp[n][m] !== Infinity) {
      return dp[n][m];
    }

    // 尝试铺设最大正方形地板
    for (let size = Math.min(n, m); size > 0; size--) {
      // 递归处理剩余的区域，并更新 dp 值
      dp[n][m] = Math.min(
        dp[n][m],
        1 + coverGrid(n - size, m) + coverGrid(size, m - size)
      );
    }

    return dp[n][m];
  }

  // 调用递归函数
  return coverGrid(n, m);
}

// 示例输入
let n = 2;
let m = 3;
console.log(minSquareTiles(n, m)); // 输出最少的正方形地板数量 3
