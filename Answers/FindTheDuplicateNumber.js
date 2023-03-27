//tf
var findDuplicate = function (nums) {
  var slow = 0;
  var fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (fast === slow) break;
  }

  var slow2 = 0;

  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow == slow2) return slow;
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));

//Wrong
var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
};

//Wrong
var findDuplicate = function (nums) {
  var set = new Set();
  for (var i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    }
    set.add(nums[i]);
  }
};
