function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//not mine
var addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }

  return List.next;
};

const node1 = new ListNode(2);
const node2 = new ListNode(4);
const node3 = new ListNode(3);
const node4 = new ListNode(5);
const node5 = new ListNode(6);
const node6 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node4.next = node5;
node5.next = node6;

console.log(addTwoNumbers(node1, node4));
