// 基于数组实现的栈
class ArrayStack {
  #stack;
  constructor() {
    this.#stack = [];
  }

  // 获取栈的长度
  get size() {
    return this.#stack.length;
  }

  // 判断栈是否为空
  isEmpty() {
    return this.#stack.length === 0;
  }
  // 入栈
  push(num) {
    this.#stack.push(num);
  }
  // 出栈
  pop() {
    if (this.isEmpty()) {
      throw new Error("栈为空");
    }
    return this.#stack.pop();
  }
  // 访问栈顶元素
  peek() {
    if (this.isEmpty()) {
      throw new Error("栈为空");
    }
    return this.#stack[this.#stack.length - 1];
  }
  // 返回Array
  toArray() {
    return this.#stack;
  }
}
let stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

stack.pop();

console.log(stack.toArray());
