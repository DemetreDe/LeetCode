var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  nums = [];
  for (var i = 0; i < lists.length; i++) {
    if (lists[i] === null) continue;
    var head = lists[i];
    while (head) {
      nums.push(head.val);
      head = head.next;
    }
  }
  if (nums.length === 0) return null;

  nums.sort((a, b) => a - b);
  head = new ListNode();
  var temp = head;
  for (var j = 0; j < nums.length; j++) {
    temp.val = nums[j];
    if (j === nums.length - 1) {
      temp.next = null;
      break;
    }
    temp.next = new ListNode();
    temp = temp.next;
  }
  return head;
};
