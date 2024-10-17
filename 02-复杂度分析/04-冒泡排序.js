/**
 * 冒泡排序
 * @param {*} arr
 * @returns
 */
function bubbleSort(arr) {
  // 至少要比较arr.length轮 每一轮下来得到一个最大值 轮数减一
  for (let i = arr.length - 1; i >= 0; i--) {
    // 每一轮下来都会得到一个最大值
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 4, 2, 3]));
