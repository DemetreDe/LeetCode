var evalRPN = function (tokens) {
  let stack = [];
  let result = 0;
  let item1;
  let item2;
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case "+":
        item1 = stack.pop();
        item2 = stack.pop();
        result = item1 + item2;
        stack.push(result);
        break;
      case "-":
        item1 = stack.pop();
        item2 = stack.pop();
        result = item2 - item1;
        stack.push(result);
        break;
      case "/":
        item1 = stack.pop();
        item2 = stack.pop();
        result = item2 / item1;
        stack.push(Math.trunc(result));
        break;
      case "*":
        item1 = stack.pop();
        item2 = stack.pop();
        result = item1 * item2;
        stack.push(result);
        break;
      default:
        stack.push(Number(tokens[i]));
    }
  }
  return stack.pop();
};

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
