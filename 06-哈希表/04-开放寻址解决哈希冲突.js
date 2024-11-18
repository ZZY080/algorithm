// 键值对 Number -> String
class Pair {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}
// 开放寻址哈希表
class HashMapOpenAddressing {
  #size; //键值对数量
  #capacity; // 哈希表容量
  #loadThres; // 触发扩容的负载因子阈值
  #extendRatio; // 扩容倍数
  #buckets; // 桶数组
  #TOMBSTONE; // 标记删除

  // 构造方法
  constructor() {
    this.#size = 0;
    this.#capacity = 4;
    this.#loadThres = 2.0 / 3.0;
    this.#extendRatio = 2;
    this.#buckets = new Array(this.#capacity).fill(null); // 桶数组
    this.#TOMBSTONE = new Pair(-1, "-1"); // 删除标记
  }
  // 哈希函数
  #hashFunc() {
    return key % this.#capacity;
  }
  // 负载因子
  #loadFactor() {
    return this.#size / this.#capacity;
  }
  // 搜索key对应的桶索引
  #findBucket(key) {
    let index = this.#hashFunc(key);
    let firstTombstone = -1;
    // key存在 线性探测，当遇到空桶时跳出
    while (this.#buckets[index] !== null) {
      // 若遇到key,返回对应的桶索引
      if (this.#buckets[index].key === key) {
        // 若之前遇到删除标记，则将键值对移动至该索引处
        if (firstTombstone !== -1) {
          this.#buckets[firstTombstone] = this.#buckets[index];
          this.#buckets[index] = this.#TOMBSTONE;
          return firstTombstone;
        }
        return index; // 返回桶索引
      }
      // 记录遇到的首个删除标记
      if (firstTombstone === -1 && this.#buckets[index] === this.#TOMBSTONE) {
        firstTombstone = index;
      }
      // 计算桶索引，越过尾部则返回头部
      index = (index + 1) % this.#capacity;
    }
    // 若key不存在 则返回添加的索引
    return firstTombstone === -1 ? index : firstTombstone;
  }
  /* 查询操作 */
  get(key) {
    // 搜索 key 对应的桶索引
    const index = this.#findBucket(key);
    // 若找到键值对，则返回对应 val
    if (
      this.#buckets[index] !== null &&
      this.#buckets[index] !== this.#TOMBSTONE
    ) {
      return this.#buckets[index].val;
    }
    // 若键值对不存在，则返回 null
    return null;
  }
  /* 添加操作 */
  put(key, val) {
    // 当负载因子超过阈值时，执行扩容
    if (this.#loadFactor() > this.#loadThres) {
      this.#extend();
    }
    // 搜索 key 对应的桶索引
    const index = this.#findBucket(key);
    // 若找到键值对，则覆盖 val 并返回
    if (
      this.#buckets[index] !== null &&
      this.#buckets[index] !== this.#TOMBSTONE
    ) {
      this.#buckets[index].val = val;
      return;
    }
    // 若键值对不存在，则添加该键值对
    this.#buckets[index] = new Pair(key, val);
    this.#size++;
  }

  /* 删除操作 */
  remove(key) {
    // 搜索 key 对应的桶索引
    const index = this.#findBucket(key);
    // 若找到键值对，则用删除标记覆盖它
    if (
      this.#buckets[index] !== null &&
      this.#buckets[index] !== this.#TOMBSTONE
    ) {
      this.#buckets[index] = this.#TOMBSTONE;
      this.#size--;
    }
  }

  /* 扩容哈希表 */
  #extend() {
    // 暂存原哈希表
    const bucketsTmp = this.#buckets;
    // 初始化扩容后的新哈希表
    this.#capacity *= this.#extendRatio;
    this.#buckets = Array(this.#capacity).fill(null);
    this.#size = 0;
    // 将键值对从原哈希表搬运至新哈希表
    for (const pair of bucketsTmp) {
      if (pair !== null && pair !== this.#TOMBSTONE) {
        this.put(pair.key, pair.val);
      }
    }
  }

  /* 打印哈希表 */
  print() {
    for (const pair of this.#buckets) {
      if (pair === null) {
        console.log("null");
      } else if (pair === this.#TOMBSTONE) {
        console.log("TOMBSTONE");
      } else {
        console.log(pair.key + " -> " + pair.val);
      }
    }
  }
}
