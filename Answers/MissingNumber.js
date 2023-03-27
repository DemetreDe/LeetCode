var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    if (nums[0] != 0) {
      return 0;
    }
    if (nums[i] + 1 != nums[i + 1]) return nums[i] + 1;
  }
};

//Faster than 99.08% apparently
var missingNumber2 = function (nums) {
  // construct array of size n+1, to leave a spot for the missing element.
  // Assign each val to -1 so we can see which position was not filled
  // O(n)
  const res = new Array(nums.length + 1).fill(-1);
  //   console.log(res);

  // "sort" the elements by assigning to the array based on val
  // O(n)
  for (const num of nums) {
    res[num] = num;
    // console.log(res);
  }
  //   console.log(res);

  // the remaining -1 index is the missing value
  // O(n-1)
  return res.indexOf(-1);
};

missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]);
