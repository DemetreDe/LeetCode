var reverseWords = function (s) {
  let arr = s.split(" ");
  arr.reverse();
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "") returnArr.push(arr[i]);
  }
  s = returnArr.join(" ");
  return s;
};

console.log(reverseWords("a good   example"));
