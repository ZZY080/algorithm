// 初始化队列
// javascript没有内置队列,可以把Array当作队列来使用
const queue = [];

// 元素入队
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

// 访问队首元素
const peek = queue[0];

// 元素出队
// 底层是数组,因此shift()方法的时间复杂度是O(1)
const pop = queue.shift();

// 获取队列的长度
const size = queue.length;

// 判断队列是否为空
const empty = queue.length === 0;

console.log(queue);
