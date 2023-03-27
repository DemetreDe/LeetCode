var twoSum = function (numbers, target) {
  var start = 0;
  var end = numbers.length - 1;
  while (end !== start) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) return [++start, ++end];
    if (sum > target) end--;
    if (sum < target) start++;
  }
};
