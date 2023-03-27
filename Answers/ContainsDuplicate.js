var containsDuplicate = function (nums) {
  var slow = 0;
  var fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) return fast;
  }
};

//Trash
var containsDuplicate = function (nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums.includes(nums[i], i + 1)) return true;
  }
  return false;
};

//Improvement
var containsDuplicate2 = function (nums) {
  nums = nums.sort();
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

//Improvement++
function setSolution(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}
