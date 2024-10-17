/**
 * 回溯
 */
function backTrack(choices, state, n, res) {
  // 当爬到第n阶时，方案数加一
  if (state === n) {
    res.set(0, res.get(0) + 1);
  }
  // 遍历所有选择
  for (const choice of choices) {
    // 剪枝：不允许越过第n阶
    if (state + choice > n) {
      continue;
    }
    // 尝试：做出选择，更新状态
    backTrack(choices, state + choice, n, res);
    // 回退
  }
}

/**
 * 爬楼梯：回溯
 * @param {*} n
 */
function climbingStairBackTrack(n) {
  const choices = [1, 2]; // 可以向上爬1阶或2阶
  const state = 0; // 从第0阶开始爬
  const res = new Map();
  res.set(0, 0); // 使用res[0]记录方案数量
  backTrack(choices, state, n, res);
  return res.get(0);
}
let start = Date.now();
console.log(climbingStairBackTrack(55));
let end = Date.now();
let consumeTime = (end - start) / 1000;
console.log(consumeTime);
