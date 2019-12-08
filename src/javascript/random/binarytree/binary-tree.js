let canvas = document.getElementById("binaryTree");
let width = canvas.width;
let height = canvas.height;

function Node(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
}

function BinaryTree() {
  this.node = undefined;
}

BinaryTree.prototype.push = push;
BinaryTree.prototype.search = search;
BinaryTree.prototype.drawTree = drawTree;

function search(value, node) {
  if (node === undefined) {
    return new Node(value);
  }
  if (value === node.value) {
    console.log(`${value} already in the tree`);
    return node;
  }
  if (value < node.value) {
    node.left = search(value, node.left);
  } else {
    node.right = search(value, node.right);
  }
  return node;
}

function push(value) {
  if (!Number.isInteger(value)) {
    console.log('Not a number');
    return;
  };
  if (!this.node) {
    this.node = new Node(value);
    return;
  }
  search(value, this.node);
}

function drawItem(node, x, y, context2D, blockSize) {
  if (!node) {
    return;
  }
  context2D.font = '10pt Times';
  context2D.strokeStyle = 'white';
  context2D.strokeText(node.value, x, y);
  context2D.beginPath();
  let leftX = x - blockSize - 5;
  let leftY = y + blockSize + 15;

  let rightX = x + blockSize + 5;
  let rightY = y + blockSize + 15;

  if (node.left) {
    context2D.moveTo(x, y);
    context2D.lineTo(leftX, leftY);
  }
  if (node.right) {
    context2D.moveTo(x, y);
    context2D.lineTo(rightX, rightY);
  }
  context2D.stroke();
  context2D.fill();
  drawItem(node.left, leftX, leftY, context2D, blockSize);
  drawItem(node.right, rightX, rightY, context2D, blockSize);
}

function drawTree() {
  let context2D = canvas.getContext("2d");
  let middleX = width / 2;
  drawItem(this.node, middleX, 10, context2D, 10);
}

function clearScreen(canvas) {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function depthFirstSearch(node) {
  if (node) {
    console.log(node.value);
    depthFirstSearch(node.left);
    depthFirstSearch(node.right);
  }
}

function treeHeight(node) {
  if (!node) return 0;
  let leftHeight = treeHeight(node.left);
  let rightHeight = treeHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

function isBalancedTree(node) {
  if (!node) return true;
  let rightHeight = treeHeight(node.right);
  let leftHeight = treeHeight(node.left);
  return Math.abs(rightHeight - leftHeight) <= 1 && isBalancedTree(node.left) && isBalancedTree(node.right);
}
let binaryTree = new BinaryTree();
binaryTree.push(40);
binaryTree.push(32);
binaryTree.push(10);
binaryTree.push(50);
binaryTree.push(51);
binaryTree.push(49);
binaryTree.push(48);
binaryTree.drawTree();

console.log('Tree height: ' + treeHeight(binaryTree.node));
console.log('Balanced tree: ' +isBalancedTree(binaryTree.node));
depthFirstSearch(binaryTree.node);
