// 链表节点类
class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

// 初始化链表
const n0 = new ListNode(0);
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);

// 构建节点之间的引用
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

/* 在链表的节点 node 之后插入节点 P */
function insert(node, p) {
  // 方法一
  let n1 = node.next;
  p.next = n1;
  node.next = p;
}
/* 删除链表的节点 node  */
function remove(node) {
  let current = n0;
  while (current && current.next) {
    if (current.next.value == node.value) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
  }
}

const p = new ListNode('p');
const p2 = new ListNode('p2');

insert(n2, p);
remove(n1);

let current = n0;
while (current) {
  console.log(current.value);
  current = current.next;
}
