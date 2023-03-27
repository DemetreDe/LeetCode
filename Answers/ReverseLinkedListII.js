function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseBetween = function (head, left, right) {
  if (!head) {
    return null;
  }
  var breadth = right - left + 1;
  var count = 0;
  var searchNode = head;
  while (left !== count) {
    searchNode = searchNode.next;
    count++;
  }
  var node = searchNode;
  var next = true;
  var prev = null;
  count = 0;

  while (breadth != count) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
    count++;
  }
  return prev;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(reverseBetween(node1, 1, 3));
