function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

https://leetcode.com/problems/insertion-sort-list/solutions/1893357/100-fastest-typescript-solution/?orderBy=most_votes&languageTags=javascript

list1 = new ListNode(4)
list1.next = new ListNode(2)
list1.next.next = new ListNode(1)
list1.next.next.next = new ListNode(3)


console.log(insertionSortList(list1))

