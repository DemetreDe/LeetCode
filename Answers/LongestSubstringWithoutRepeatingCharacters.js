var lengthOfLongestSubstring = function (s) {
  longest = new String();
  current = new String();
  currentIndexStart = 0;
  renewIndexFlag = false;

  if (s.length === 1) {
    return s.length;
  }

  for (let i = 0; i < s.length; i++) {
    current += s[i];
    console.log(current);
    if (renewIndexFlag) {
      currentIndexStart = i;
      renewIndexFlag = false;
    }

    if (current.includes(s[i + 1])) {
      if (current.length > longest.length) {
        longest = current;
      }
      current = "";
      renewIndexFlag = true;
      i = currentIndexStart;
    }
  }
  if (current.length > longest.length) {
    longest = current;
  }

  return longest.length;
};

console.log(lengthOfLongestSubstring("tmmzuxt"));
