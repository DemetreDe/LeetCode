var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (
      nums.includes(target - nums[i]) &&
      nums.indexOf(target - nums[i]) != i
    ) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
};

console.log(twoSum([-3, 4, 3, 90], 0));
//Learn hash maps to reduce time complexity
