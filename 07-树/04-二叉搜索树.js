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
class BinarySearchTree {
  // 查找节点
  search(num) {
    let cur = this.root;
    // 循环查找,越过叶节点后跳出
    while (cur !== null) {
      // 目标节点在cur的右子树中
      if (cur.val < num) {
        cur = cur.right;
      } else if (cur.val > num) {
        // 目标节点在cur的左子树中
        cur = cur.left;
      } else {
        // 找到目标节点，跳出循环
        break;
      }
    }
    // 返回目标节点
    return cur;
  }
  // 插入节点
  insert(num) {
    // 若树为空，则初始化根节点
    if (this.root === null) {
      this.root = new TreeNode(num);
      return;
    }
    let cur = this.root;
    let pre = null;
    // 循环查找,越过叶节点后跳出
    while (cur !== null) {
      // 找到重复节点，直接返回
      if (cur.val === num) return;
      pre = cur;
      // 插入位置在cur的右子树中
      if (cur.val < num) {
        cur = cur.right;
      } else {
        // 插入位置在cur的左子树中
        cur = cur.left;
      }
    }
    // 插入节点
    const node = new TreeNode(num);
    if (pre.val < num) {
      pre.right = node;
    } else {
      pre.left = node;
    }
  }
  /* 删除节点 */
  remove(num) {
    // 若树为空，直接提前返回
    if (this.root === null) return;
    let cur = this.root,
      pre = null;
    // 循环查找，越过叶节点后跳出
    while (cur !== null) {
      // 找到待删除节点，跳出循环
      if (cur.val === num) break;
      pre = cur;
      // 待删除节点在 cur 的右子树中
      if (cur.val < num) cur = cur.right;
      // 待删除节点在 cur 的左子树中
      else cur = cur.left;
    }
    // 若无待删除节点，则直接返回
    if (cur === null) return;
    // 子节点数量 = 0 or 1
    if (cur.left === null || cur.right === null) {
      // 当子节点数量 = 0 / 1 时， child = null / 该子节点
      const child = cur.left !== null ? cur.left : cur.right;
      // 删除节点 cur
      if (cur !== this.root) {
        if (pre.left === cur) pre.left = child;
        else pre.right = child;
      } else {
        // 若删除节点为根节点，则重新指定根节点
        this.root = child;
      }
    }
    // 子节点数量 = 2
    else {
      // 获取中序遍历中 cur 的下一个节点
      let tmp = cur.right;
      while (tmp.left !== null) {
        tmp = tmp.left;
      }
      // 递归删除节点 tmp
      this.remove(tmp.val);
      // 用 tmp 覆盖 cur
      cur.val = tmp.val;
    }
  }
}
