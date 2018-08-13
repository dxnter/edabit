function cumulativeSum(arr) {
  return arr.map((x, i) => {
    return x + arr.slice(0, i).reduce((a, b) => a + b, 0);
  });
}
