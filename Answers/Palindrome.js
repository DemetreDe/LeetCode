var isPalindrome = function (x) {
  let xStr = x.toString();
  let plndrmStr = new String();
  for (let i = xStr.length - 1; i != -1; i--) {
    plndrmStr += xStr[i];
  }
  console.log(xStr);
  console.log(plndrmStr);
  return xStr == plndrmStr;
};

console.log(isPalindrome(-121));
