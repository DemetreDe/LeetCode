var construct2DArray = function (original, rows, columns) {
  if (!(original.length === rows * columns)) return [];

  let result = [];
  let arr = [];

  for (i = 0; i <= original.length; i++) {
    if (i > 0 && i % columns === 0) {
      result.push(arr);
      arr = [];
    }
    arr.push(original[i]);
  }

  return result;
};

console.log(construct2DArray([1, 2], 1, 1));
