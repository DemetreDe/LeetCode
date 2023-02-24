var addTwoNumbers = function (l1, l2) {
  var result = ParseListToBigInt(l1) + ParseListToBigInt(l2);
  result = reverseString(result.toString());
  return toListNode(result);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//Create new ListNode
function toListNode(result) {
  returnedListNode = null;
  for (let i = result.length - 1; i != -1; i--) {
    returnedListNode = {
      val: BigInt(result[i]),
      next: returnedListNode,
    };
  }
  return returnedListNode;
}

//Reverse String
function reverseString(str, index = 0, reversed = "") {
  //   console.log(str[index] + reversed);
  if (index === str.length) {
    return reversed;
  }
  //Recursively Traverse String(Character Array)
  return reverseString(str, index + 1, str[index] + reversed);
}

var ParseListToBigInt = function (list) {
  let reversedString = "";

  //Side-effect: the list order is being reversed because of recursion
  if (list.next != null) {
    reversedString += ParseListToBigInt(list.next);
  }
  reversedString += list.val;
  return BigInt(reversedString);
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
