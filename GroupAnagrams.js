var groupAnagrams = function (strs) {
  let objMap = {};
  for (let word of strs) {
    let anagramInstance = word.split("").sort().join("");
    objMap[anagramInstance]
      ? objMap[anagramInstance].push(word)
      : (objMap[anagramInstance] = [word]);
  }
  return Object.values(objMap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
