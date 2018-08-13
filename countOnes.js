function countOnes(i) {
  return Array.from(i.toString(2))
    .filter(i => i == 1)
    .map(Number)
    .reduce((ones, i) => ones + 1, 0);
}
