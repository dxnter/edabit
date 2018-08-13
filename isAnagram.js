function isAnagram(s1, s2) {
  s1 = Array.from(s1.toLowerCase());
  s2 = Array.from(s2.toLowerCase());
  return s1.every(char => s2.includes(char)) && s1.length === s2.length;
}
