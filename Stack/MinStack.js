var MinStack = function () {
  this.elements = [];
};

MinStack.prototype.push = function (val) {
  this.elements.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {};

var obj = new MinStack();
obj.push(1);
