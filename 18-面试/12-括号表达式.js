class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 将已排序的数组转换为平衡二叉搜索树
function sortedArrayToBST(arr) {
  if (arr.length === 0) {
    return null;
  }
  const mid = Math.floor(arr.length / 2);
  const root = new TreeNode(arr[mid]); // 中间元素作为根节点
  root.left = sortedArrayToBST(arr.slice(0, mid)); // 左半部分
  root.right = sortedArrayToBST(arr.slice(mid + 1)); // 右半部分
  return root;
}

// 查找满足范围的叶子节点
function findLeafNodesInRange(node, low, high, leaves = []) {
  if (!node) {
    return;
  }

  // 递归左子树和右子树
  findLeafNodesInRange(node.left, low, high, leaves);
  findLeafNodesInRange(node.right, low, high, leaves);

  // 检查当前节点是否为叶子节点并在范围内
  if (!node.left && !node.right) {
    // 确保是叶子节点
    if (node.value >= low && node.value <= high) {
      leaves.push(node.value);
    }
  }
}

// 主函数示例
const sortedArray = [7, 17, 35, 56, 65, 66].sort((a, b) => a - b); // 示例已排序数组
const bstRoot = sortedArrayToBST(sortedArray); // 转换为平衡二叉树

const low = 56;
const high = 67;
const leavesInRange = [];
findLeafNodesInRange(bstRoot, low, high, leavesInRange); // 查找满足范围的叶子节点

console.log(leavesInRange); // 输出结果
