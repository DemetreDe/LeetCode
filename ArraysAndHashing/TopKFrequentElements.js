var topKFrequent = function (nums, k) {
    nums.sort((a,b) => a - b)
    nums.reverse()

    frequencies = new Map()

    for (num of nums){
        frequencies.get(num) ? frequencies.get(num).val++ : frequencies.set(num,  {val: 1})
    }

    return ([...frequencies.keys()].sort((a,b )=> frequencies.get(b).val - frequencies.get(a).val).slice(0,k))
  };

  console.log(topKFrequent([1,1,1,2,2,3,3], 2))