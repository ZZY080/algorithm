/**
 * 二分查找也称折半查找（Binary Search），它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列。
 * 目前只能处理数组元素不重复的情况
 * @param {*} start
 * @param {*} end
 * @returns
 */

function generateLetterTable(start, end) {
  let letterArray = [];
  let startNum = start.charCodeAt();
  let endNum = end.charCodeAt();
  for (let i = startNum; i <= endNum; i++) {
    letterArray.push(String.fromCharCode(i));
  }
  return letterArray;
}
function binarySearch(arr, target) {
  // 数组起始索引
  let start = 0;
  // 数组结束索引
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    // 1.获取中间索引(向下取整)
    middle = Math.floor((start + end) / 2);
    // 2.如果找到目标元素返回其索引
    if (target == arr[middle]) {
      return middle;
    } else if (target > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
let letterArray = generateLetterTable("a", "z");
let queryChar = "A";
console.log(binarySearch([1, 2, 3, 4, 1], 1));
