function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//i didnt write this
// Recursion is not acceptable as per requirement for only constant extra memory is allowed.
function reverseKGroup(head, k) {
  if (!head) return null;
  var tail = head;
  for (var i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  }
  var next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
}

var reverse = function (head) {
  let temp = head;
  let next;
  let prev = null;
  while (temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
  return prev;
};

var list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

console.log(reverseKGroup(list1, 2));

//My dirty brute force
// var reverseKGroup = function (head, k) {
//     if (k === 1) return head;
//     var collections = [];
//     var subCollection = [];
//     //Groups all
//     while (head) {
//       for (let i = 0; i < k && head; i++) {
//         subCollection.push(head);
//         head = head.next;
//       }
//       collections.push(subCollection);
//       subCollection = [];
//     }

//     if (collections.length === 1) {
//       collections = collections[0];
//       for (let j = collections.length - 1; j != -1; j--) {
//         if (j === 0) {
//           collections[j].next = null;
//           break;
//         }
//         collections[j].next = collections[j - 1];
//       }
//       return collections[k - 1];
//     }

//     //Sorts all non edge cases
//     for (let i = 0; i < collections.length; i++) {
//       subCollection = collections[i];
//       if (subCollection.length != k) {
//         collections[i - 1][0].next = subCollection[0];
//         break;
//       }
//       for (let j = subCollection.length - 1; j != -1; j--) {
//         if (j === 0) {
//           subCollection[j].next = null;
//           break;
//         }
//         subCollection[j].next = subCollection[j - 1];
//       }
//       if (i !== collections.length - 1) {
//         subCollection[0].next = collections[i + 1][k - 1];
//         continue;
//       }
//       break;
//     }

//     head = collections[0][k - 1];

//     return head;
//   };
