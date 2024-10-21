// 双向链表节点
class ListNode {
  value; // 节点值
  prev; // 前驱结点引用
  next; // 后继结点引用
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// 基于双向链表实现的双向队列
class LinkedListDeque {
  #front; // 头节点
  #rear; // 尾节点
  #queueSize; // 双向队列的长度
  constructor() {
    this.#front = null;
    this.#rear = null;
    this.#queueSize = 0;
  }
  // 队首入队
  pushFirst(value) {
    const node = new ListNode(value);
    // 若链表为空,则令front 和 rear 指向node
    if (this.#queueSize === 0) {
      this.#front = node;
      this.#rear = node;
    } else {
      this.#front.prev = node;
      node.next = this.#front;
      // 更新尾节点
      this.#front = node;
    }
    this.#queueSize++;
  }

  // 队尾入队操作
  pushLast(value) {
    const node = new ListNode(value);
    // 若链表为空,则令front 和 rear 指向node
    if (this.#queueSize === 0) {
      this.#front = node;
      this.#rear = node;
    } else {
      this.#rear.next = node;
      node.prev = this.#rear;
      // 更新尾节点
      this.#rear = node;
    }
    this.#queueSize++;
  }
  // 队首出队
  popFirst() {
    if (this.#queueSize === 0) {
      return null;
    }
    const value = this.#front.value;
    // 删除头节点
    let temp = this.#front.next;
    if (temp !== null) {
      temp.prev = null;
      this.#front.next = null;
    }
    // 更新头节点
    this.#front = temp;
    this.#queueSize--;
    return value;
  }
  // 队尾出队
  popLast() {
    if (this.#queueSize === 0) {
      return null;
    }
    // 获取尾节点的值
    const value = this.#rear.value;
    // 删除尾节点
    let temp = this.#rear.prev; // 获取尾节点的前一个节点
    if (temp !== null) {
      temp.next = null;
      this.#rear.prev = null;
    }
    // 更新尾节点
    this.#rear = temp;
    this.#queueSize--;
    return value;
  }
  // 访问队首元素
  peekLast() {
    return this.#queueSize === 0 ? null : this.#rear.value;
  }
  // 访问队首元素
  peekFirst() {
    return this.#queueSize === 0 ? null : this.#front.value;
  }
  // 获取双向队列的长度
  size() {
    return this.#queueSize;
  }
  // 判断双向队列是否为空
  isEmpty() {
    return this.#queueSize === 0;
  }
  // 打印队列
  print() {
    const arr = [];
    let current = this.#front;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

let deque = new LinkedListDeque();
deque.pushLast(7);
deque.pushLast(8);
deque.pushLast(9);
deque.pushFirst(5);
deque.pushFirst(4);
deque.pushFirst(3);
deque.pushFirst(2);
deque.popFirst();

deque.print();
