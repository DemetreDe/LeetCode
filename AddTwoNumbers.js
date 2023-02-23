function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//   Garbage

//   var addTwoNumbers = function (l1, l2) {
//     let result = reverseListParseInt(l1) + reverseListParseInt(l2);
//     return toReverseList(result.toString());
//   };

//   var reverseListParseInt = function (list) {
//     let reversedString = "";
//     for (let i = list.length - 1; i != -1; i--) {
//       reversedString += list[i];
//     }
//     return parseInt(reversedString);
//   };

//   var toReverseList = function (str) {
//     let reversedList = [];
//     for (let i = str.length - 1; i != -1; i--) {
//       reversedList.push(parseInt(str[i]));
//     }
//     return reversedList;
//   };

//   console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
