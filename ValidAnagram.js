var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  sArr = charArray(s).sort();
  tArr = charArray(t).sort();
  if (JSON.stringify(sArr) === JSON.stringify(tArr)) return true;
  return false;
};

var charArray = function (str) {
  arr = [];
  for (i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
};

console.log(isAnagram("anagram", "nagaram"));
