function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var sortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    const [left, right] = split(head);
    return merge(sortList(left), sortList(right));
};

function split(node) {
    let slow = node;
    let fast = node;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const left = node;
    const right = slow.next;
    slow.next = null;
    return [left, right];
}

function merge(l1, l2) {
    let result = new ListNode(null);
    let temp = result;
    while (l1 && l2) {
        if (l2.val > l1.val) {
            temp.next = l1;
            temp = temp.next;
            l1 = l1.next;
        } else {
            temp.next = l2;
            temp = temp.next;
            l2 = l2.next;
        }
    }
    if (l1) {
        temp.next = l1;
    }
    if (l2) {
        temp.next = l2;
    }
    return result.next;
}
list1 = new ListNode(4)
list1.next = new ListNode(2)
list1.next.next = new ListNode(1)
list1.next.next.next = new ListNode(3)

console.log(sortList(list1))