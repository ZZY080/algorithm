// 键值对 Number -> String
class Pair {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

// 基于数组实现的哈希表
class ArrayHashMap {
  // 桶
  #buckets;
  constructor() {
    // 初始化数组包含100个桶
    this.#buckets = new Array(100).fill(null);
  }
  // 哈希函数
  #hashFunc(key) {
    return key % 100;
  }

  // 查询操作
  get(key) {
    let index = this.#hashFunc(key);
    let pair = this.#buckets[index];
    if (pair === null) return null;
    return pair.val;
  }

  // 添加操作
  set(key, val) {
    let index = this.#hashFunc(key);
    // 置为null，代表删除
    this.#buckets[index] = new Pair(key, val);
  }
  // 删除操作
  delete(key) {
    let index = this.#hashFunc(key);
    // 置为null，代表删除
    this.#buckets[index] = null;
  }

  // 获取所有键值对
  entries() {
    let arr = [];
    for (let i = 0; i < this.#buckets.length; i++) {
      if (this.#buckets[i]) {
        arr.push(this.#buckets[i]);
      }
    }
    return arr;
  }
  // 获取所有的键
  keys() {
    let arr = [];
    for (let i = 0; i < this.#buckets.length; i++) {
      if (this.#buckets[i]) {
        arr.push(this.#buckets[i].key);
      }
    }
    return arr;
  }
  // 获取所有的值
  values() {
    let arr = [];
    for (let i = 0; i < this.#buckets.length; i++) {
      if (this.#buckets[i]) {
        arr.push(this.#buckets[i].val);
      }
    }
    return arr;
  }
  // 打印哈希表
  print() {
    let pairSet = this.entries();
    for (const pair of pairSet) {
      console.info(`${pair.key}->${pair.val}`);
    }
  }
}

const map = new ArrayHashMap();
// 在哈希表中添加键值对 (key, value)
map.set(12836, "小哈");
map.set(15937, "小罗");
map.set(16750, "小算");
map.set(13276, "小满");
map.set(10583, "小鸭");
map.print();
// 删除操作
// 在哈希表中删除键值对 (key, value)
map.delete(10583);
map.print();
