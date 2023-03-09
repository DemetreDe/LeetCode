// In JavaScript, objects are assigned by reference, not by value.
var removeElements = function (head, val) {
  let tempHead = head,
    prev;
  while (tempHead) {
    if (tempHead.val === val) {
      // when head is present at 0th index
      if (!prev) {
        head = head.next;
        tempHead = tempHead.next;
      } else {
        prev.next = tempHead.next;
        tempHead = tempHead.next;
      }
    } else {
      prev = tempHead;
      tempHead = tempHead.next;
    }
  }

  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(6);
var node4 = new ListNode(3);
var node5 = new ListNode(4);
var node6 = new ListNode(5);
var node7 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(removeElements(node1, 6));

//ABSOLUTE GARBAGE

// var removeElements = function (head, val) {
//   let targets = findAll(head, val);
//   let count = targets.length;
//   while (count > 0) {
//     head = deleteN(head, targets[count - 1]);
//     count--;
//   }
//   return head;
// };

// function findAll(head, value, targets = [], count = 0) {
//   if (head.val === value) targets.push(count);
//   if (head.next === null) return targets;
//   return findAll(head.next, value, targets, ++count);
// }

// function deleteN(head, position) {
//   if (position === 0) {
//     return head ? head.next : null;
//   }
//   let current = head;
//   //Goes up to the position before the target
//   for (let i = 0; i < position - 1 && current; i++) {
//     current = current.next;
//   }
//   if (!current || !current.next) {
//     return head;
//   }
//   current.next = current.next.next;
//   return head;
// }
