function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;

  let mergedList;

  if (l1.val < l2.val) {
    mergedList = l1;
    l1 = l1.next;
  } else {
    mergedList = l2;
    l2 = l2.next;
  }

  let tail = mergedList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next;
  }

  if (l1) tail.next = l1;
  if (l2) tail.next = l2;

  return mergedList;
};

list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(mergeTwoLists(list1, list2));
console.log(performance.now() / 1000);
