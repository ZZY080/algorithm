/**
 * 记忆搜索
 * @param {*} i
 * @param {*} mem
 * @returns
 */
function dfs(i, mem) {
  // 已知dp[1]和dp[2] 即返回
  if (i === 1 || i == 2) {
    return i;
  }
  // 若存在记录dp[i] 则直接返回
  if (mem[i] != -1) {
    return mem[i];
  }
  // dp[i]=dp[i-1]+dp[i-2]
  const count = dfs(i - 1, mem) + dfs(i - 2, mem);
  // 记录dp[i]
  mem[i] = count;
  return count;
}

function climbingStairDfsMem(n) {
  // mem[i]记录爬到第i阶的方案总数,-1代表无记录
  const mem = new Array(n + 1).fill(-1); // n+1  数组是从0开始的-> 1-9
  return dfs(n, mem);
}

let start = Date.now();
console.log(climbingStairDfsMem(10040));
let end = Date.now();
let consumeTime = (end - start) / 1000;
console.log(consumeTime);
