// var reverseList = function (head) {
//     stack = [];
//     while (head != null) {
//       stack.push(head.val);
//       head = head.next;
//     }
//     head = createLinkedList(stack);
//     return head;
//   };

//   function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }

//   function createLinkedList(stack) {
//     if (stack.length === 0) {
//       return null;
//     }
//     const node = new ListNode(stack.pop());
//     node.next = createLinkedList(stack);
//     return node;
//   }

//   const node1 = new ListNode(1);
//   const node2 = new ListNode(2);
//   const node3 = new ListNode(3);
//   const node4 = new ListNode(4);
//   const node5 = new ListNode(5);

//   node1.next = node2;
//   node2.next = node3;
//   node3.next = node4;
//   node4.next = node5;

//   reverseList(node1);
