var groupAnagrams = function (strs) {
  var obj = {};
  for (var i = 0; i < strs.length; i++) {
    let anagram = strs[i].split("").sort().join("");
    obj[anagram] ? obj[anagram].push(strs[i]) : (obj[anagram] = [strs[i]]);
  }
  return Object.values;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
