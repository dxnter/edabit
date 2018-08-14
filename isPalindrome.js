function isPalindrome(str) {
  return Array.from(str.toLowerCase()).reverse().join(' ') === str;
}