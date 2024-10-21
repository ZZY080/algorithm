/**
 * 二分查找也称折半查找（Binary Search），它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列。
 * 目前只能处理数组元素不重复的情况
 * 递归解决  会有栈溢出的情况
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
function binarySearch(arr, start, end, target) {
  if (start > end) {
    return -1;
  }
  let middle = Math.floor((start + end) / 2);
  if (target == arr[middle]) {
    return middle;
  } else if (target > arr[middle]) {
    start = middle + 1;
    return binarySearch(arr, start, end, target);
  } else {
    end = middle - 1;
    return binarySearch(arr, start, end, target);
  }
}
let letterArray = generateLetterTable("a", "z");
let queryChar = "b";
console.log(binarySearch(letterArray, 0, letterArray.length - 1, queryChar));

const v8 = require("v8");
console.log(v8.getHeapCodeStatistics());
