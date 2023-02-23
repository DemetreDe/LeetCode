var singleNumber = function (nums) {
  let single = [];

  nums.forEach((element) => {
    if (single.includes(element)) {
      single.splice(single.indexOf(element), 1);
      console.log("Deleting ", element, " Array is now ", single);
    } else {
      single.push(element);
      console.log("Pushing ", element, " Array is now ", single);
    }
  });

  console.log(single);
  return single[0];
};

console.log(singleNumber([1, 0, 1]));
