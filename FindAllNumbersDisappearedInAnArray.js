var findDisappearedNumbers = function (nums) {
  numsSet = new Set(nums);
  missingNums = [];
  for (i = 1; i <= nums.length; i++) {
    if (!numsSet.has(i)) {
      missingNums.push(i);
    }
  }
  return missingNums;
};

console.log(findDisappearedNumbers([1, 1]));
