var reverse = function (x) {
  negativeFlag = false;
  if (x < 0) {
    x *= -1;
    negativeFlag = true;
  }
  x = BigInt(reverseString(x.toString()));

  if (!negativeFlag && x > Math.pow(2, 31) - 1) {
    return 0;
  } else if (negativeFlag && x > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    switch (negativeFlag) {
      case true:
        return x * BigInt(-1);
      case false:
        return x;
    }
  }
};

function reverseString(str, index = 0, reversed = "") {
  //   console.log(str[index] + reversed);
  if (index === str.length) {
    return reversed;
  }
  //Recursively Traverse String(Character Array)
  return reverseString(str, index + 1, str[index] + reversed);
}
console.log(Math.pow(2, 31));
