function isIsogram(str) {
  return Array.from(new Set(str.toLowerCase())).length === str.length;
}