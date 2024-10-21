// 链表节点类
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 链表节点类
class LinkedListStack {
  #stackPeek; // 将头节点作为栈
  #stackSize = 0; // 栈的长度
  constructor() {
    this.#stackPeek = null;
  }
  // 获取栈的长度
  get size() {
    return this.#stackSize;
  }
  // 判断栈是否为空
  isEmpty() {
    return this.#stackSize === 0;
  }
  // 入栈
  push(num) {
    // 创建一个节点
    const node = new ListNode(num);
    node.next = this.#stackPeek;
    this.#stackPeek = node;
    this.#stackSize++;
  }
  // 出栈
  pop() {
    // 获取当前栈顶元素的值
    const num = this.peek();
    this.#stackPeek = this.#stackPeek.next;
    this.#stackSize--;
    return num;
  }
  // 访问栈顶元素
  peek() {
    if (!this.#stackPeek) {
      throw new Error("栈为空");
    }
    return this.#stackPeek.value;
  }
  // 将链表转化为 Array 并返回
  toArray() {
    let current = this.#stackPeek;
    const array = new Array(this.size);
    for (let i = array.length - 1; i >= 0; i--) {
      array[i] = current.value;
      current = current.next;
    }
    return array;
  }
}

let stack = new LinkedListStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack.toArray());
