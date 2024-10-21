class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(n) {
  if (n == 0) {
    return null;
  }
  const root = new TreeNode(n);
  root.left = buildTree(n - 1);
  console.log("left" + n);
  root.right = buildTree(n - 1);
  console.log("right" + n);
  return root;
}
console.log(buildTree(3));
