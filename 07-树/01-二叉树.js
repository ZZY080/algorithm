// 二叉树节点类
class TreeNode {
  val; // 节点值
  left; // 左子结点指针
  right; // 右子节点指针
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 初始化二叉树

// 初始化节点
let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);

// 构建节点之间的引用
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

console.log(n1);

// 插入与删除节点
let P = new TreeNode("p");

// 在n1->n2 之间插入节点P
P.left = n2;
n1.left = P;
console.log(n1);
// 删除p节点
n1.left = n2;
P.left = null;

console.log(n1);
