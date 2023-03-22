var twoSum = function (nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let req = target - nums[i];
    if (map.has(req)) return [i, map.get(req)];
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
