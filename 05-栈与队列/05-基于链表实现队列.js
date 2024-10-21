// 链表节点类
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 基于链表实现的队列
class LinkedListQueue {
  #front; // 头节点
  #rear; // 尾节点
  #queueSize = 0; // 队列长度
  constructor() {
    this.#front = null;
    this.#rear = null;
  }
  // 获取队列长度
  get size() {
    return this.#queueSize;
  }
  // 判断队列是否为空
  isEmpty() {
    return this.size === 0;
  }
  // 入队
  push(num) {
    // 创建节点
    const node = new ListNode(num);
    // 在尾节点后添加 num
    // 如果队列为空,则令头,尾节点都指向该节点
    if (!this.#front) {
      this.#front = node;
      this.#rear = node;
    } else {
      this.#rear.next = node;
      this.#rear = node;
    }
    this.#queueSize++;
  }
  // 出队
  pop() {
    // 获取队首元素的值
    const num = this.peek();
    // 删除头节点
    this.#front = this.#front.next;
    this.#queueSize--;
    return num;
  }

  // 访问队首元素
  peek() {
    if (this.size === 0) {
      throw new Error("队列为空");
    }
    return this.#front.value;
  }
  // 将链表转化为数组返回
  toArray() {
    let current = this.#front;
    const array = new Array(this.size);
    for (let i = 0; i < array.length; i++) {
      array[i] = current.value;
      current = current.next;
    }
    return array;
  }
}

const queue = new LinkedListQueue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
console.log(queue.toArray());
