// 初始化哈希表
const map = new Map();
// 添加操作
// 在哈希表中添加键值对 (key, value)
map.set(12836, "小哈");
map.set(15937, "小罗");
map.set(16750, "小算");
map.set(13276, "小满");
map.set(10583, "小鸭");
console.log("map:", map);
// 向哈希表中输入键 key ，得到值 value
let name = map.get(15937);
console.log("name:", name);

// 删除操作
// 在哈希表中删除键值对 (key, value)
map.delete(10583);
console.log("map:", map);

// 哈希表有三种常用的遍历方式：遍历键值对、遍历键和遍历值。

// 1.遍历键值对
for (const [k, v] of map.entries()) {
  console.log(k + "->" + v);
}

// 2.单独遍历键
for (const k of map.keys()) {
  console.info(k);
}
// 3.单独遍历值
for (const v of map.values()) {
  console.info(v);
}
