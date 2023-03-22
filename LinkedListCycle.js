//Using a map
var hasCycle = function (head) {
  if (!head) return false;
  var map = new Map();
  while (head) {
    if (map.get(head)) {
      return true;
    }
    map.set(head, true);
    if (!head.next) return false;
    head = head.next;
  }
};

//Using slow/fast pointers?
var hasCycle = function (head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (fast === head) return true;
  }
  return false;
};
