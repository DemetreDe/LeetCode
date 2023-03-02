//I DONT KNOW WHAT IM DOING
var MinStack = function () {
  return {
    stack: [],
    topVal: null,
    minVal: null,
  };
};

MinStack.prototype.push = function (val) {
  if (val > this.topval) topVal = val;
  if (val < this.minVal) minVal = val;
  this.stack.push(val);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.topVal;
};

MinStack.prototype.getMin = function () {
  return this.minVal;
};

let minStack = MinStack();
minStack.prototype.push(1);
minStack.prototype.push(2);
