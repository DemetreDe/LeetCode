var removeNthFromEnd = function (head, n) {
  const [tail, size] = findTail(head, 0);
  target = size - n;
  return deleteN(head, target);
};

function findTail(node, size) {
  if (node.next === null) return [node, ++size];
  return findTail(node.next, ++size);
}

function deleteN(head, position) {
  if (position === 0) {
    return head ? head.next : null;
  }
  let current = head;
  //Goes up to the position before the target
  for (let i = 0; i < position - 1 && current; i++) {
    current = current.next;
  }
  if (!current || !current.next) {
    return head;
  }
  current.next = current.next.next;
  return head;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(removeNthFromEnd(node1, 4));
