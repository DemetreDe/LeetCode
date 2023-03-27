var lengthOfLastWord = function (s) {
  let strArr = s.trim().split(" ");
  console.log(strArr);
  let str = strArr[strArr.length - 1];
  return str.length;
};

consolelengthOfLastWord("Hello World");
