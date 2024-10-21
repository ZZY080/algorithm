// 生成扑克牌
function generatePlayingCard() {
  let cardList = [];
  let cardNum = [
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
    "2",
  ];
  let cardType = ["♠️", "♥️", "♣️", "♦️"];

  for (let i = 0; i < cardNum.length; i++) {
    for (let j = 0; j < cardType.length; j++) {
      cardList.push(cardNum[i] + cardType[j]);
    }
  }
  return cardList;
}
// 插入排序
function insertSort(arr) {
  // 外循环:已排序区间为[0,i-1]
  for (let i = 1; i < arr.length; i++) {
    // 基准元素
    let base = arr[i];
    // 从基准元素前一个元素开始
    let j = i - 1;
    // 内循环:将base插入到已排区间[0,i-1]中的正确位置
    while (j >= 0 && arr[j] > base) {
      // 当前位置元素向后移一位
      arr[j + 1] = arr[j]; // 将arr[j]向后移一位
      j--;
    }
    arr[j + 1] = base; // 将base赋值到正确位置
  }
  return arr;
}

console.log(insertSort([1, 5, 2, 3, 5, 7, 2]));
const v8 = require("v8");
console.log(v8.getHeapCodeStatistics());
