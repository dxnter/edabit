function findOdd(arr) {
  const occurances = {};
  arr.forEach(int => {
    occurances[int] = occurances[int] + 1 || 1;
  });
  for(const integer in occurances) {
    if (occurances[integer] % 2 !== 0) return Number(integer);
  }
}
