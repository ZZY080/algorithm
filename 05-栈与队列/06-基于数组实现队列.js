// 基于数组实现队列
class ArrayQueue {
  #nums; // 用于存储队列元素的数组
  #front = 0; // 队首索引
  #queueSize = 0; // 队列长度
  constructor(capacity) {
    this.#nums = new Array(capacity);
  }
  // 获取队列的容量
  get capacity() {
    return this.#nums.length;
  }
  // 获取队列长度
  get size() {
    return this.#queueSize;
  }
  // 判断队列是否为空
  isEmpty() {
    return this.#queueSize === 0;
  }
  // 入队
  push(num) {
    if (this.size === this.capacity) {
      console.log("队列已满");
      return;
    }
    // 计算队尾指针，指向对位索引加1
    // 通过取余操作实现 rear越过数组尾部后回到头部
    const rear = (this.#front + this.size) % this.capacity;
    // 将num添加至队尾
    this.#nums[rear] = num;
    this.#queueSize++;
  }
  // 出队
  pop() {
    // 获取当前队首元素
    const num = this.peek();
    // 队首指针向后移动一位,若越过尾部,则返回到数组头部 取模保证下标不会溢出
    this.#front = (this.#front + 1) % this.capacity;
    this.#queueSize--;
    return num;
  }
  // 访问队首元素
  peek() {
    if (this.isEmpty()) {
      throw new Error("队列为空");
    }
    return this.#nums[this.#front];
  }
  // 返回array
  toArray() {
    // 仅转换有效长度范围内的列表元素
    const arr = new Array(this.size);
    for (let i = 0, j = this.#front; i < this.size; i++, j++) {
      arr[i] = this.#nums[j % this.capacity];
    }
    return arr;
  }
}

let queue = new ArrayQueue(6);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
queue.pop();
console.log(queue.toArray());
