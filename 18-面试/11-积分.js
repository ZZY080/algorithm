const rl = require('readline').createInterface({
  input: process.stdin,
});
let iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // 读取测试数据组数
  let T = parseInt(await readline());
  for (let i = 0; i < T; i++) {
    let [n, k] = (await readline())
      .trim()
      .split(' ')
      .map((item) => parseInt(item));

    // 动态规划数组初始化
    let dp = Array(n + 1)
      .fill(0)
      .map(() => Array(k + 1).fill(0));
    console.log(dp);

    // 动态规划过程
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= k; j++) {
        dp[i][j] = dp[i - 1][j]; // 不选第 i 个数
        if (i > 1) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 2][j - 1] + 1); // 选择第 i 个数
        }
      }
    }

    // 输出 dp[n][k]，即在前 n 个数中选择 k 个数的最大积分
    console.log(dp[n][k]);
  }
})();
