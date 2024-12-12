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

// 初始化节点
let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);

// 构建二叉树
n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

n3.left = n6;
n3.right = n7;

/**
 * 层序遍历(广度优先搜索 BFS)
 */
const levelOrder = (root) => {
  // 初始化队列,介入根节点
  const queue = [root];
  // 初始化一个列表,用于保存遍历序列
  const list = [];
  while (queue.length) {
    let node = queue.shift(); // 队列出队
    list.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  console.log(list);
};
levelOrder(n1);

/**
 * 前序遍历 (深度优先搜索 DFS)
 * 访问优先级：根节点->左子树->右子树
 */
const list = [];
const preOrder = (root) => {
  if (root === null) {
    return;
  }
  list.push(root.val);
  preOrder(root.left);
  preOrder(root.right);
};

/**
 * 中序遍历 (深度优先搜索 DFS)
 * 访问优先级：左子树->根节点->右子树
 */
const inOrder = (root) => {
  if (root === null) {
    return;
  }
  inOrder(root.left);
  list.push(root.val);
  inOrder(root.right);
};

/**
 * 后续遍历 (深度优先搜索 DFS)
 * 访问优先级：左子树->右子树->根节点
 */
const postOrder = (root) => {
  if (root === null) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  list.push(root.val);
};

postOrder(n1);
console.log(list);
