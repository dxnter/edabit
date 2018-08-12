function mean(arr) {
  return Number((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
}