var topKFrequent = function (nums, k) {
  if (k === 1) return new Set(nums);
  elementFrequency = {};
  highest = 0;
  returnArr = [];
  for (i = 0; i < nums.length; i++) {
    elementFrequency[nums[i]]
      ? elementFrequency[nums[i]]++
      : (elementFrequency[nums[i]] = 1);
    if (nums[i] > highest) {
      highest = nums[i];
    }
  }
  for (x = highest; k > 0; x--) {
    elementFrequency.x;
  }
};

topKFrequent([1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 6, 6, 3], 2);
