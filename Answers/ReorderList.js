function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reorderList = function (head) {
  var stack = [];
  var temp = head;
  while (temp) {
    stack.push(temp);
    temp = temp.next;
  }

  temp = head;
  var end = stack.length - 1;

  for (var i = 0; i < stack.length; i++) {
    if (i >= end) {
      stack[i].next = null;
      break;
    }
    //inserting between list nodes
    stack[i].next = stack[end];
    stack[end].next = stack[i + 1];
    end--;
  }
  return temp;
};

list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

console.log(reorderList(list1));
