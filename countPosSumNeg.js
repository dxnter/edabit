function countPosSumNeg(arr) {
  if (!arr || arr.length <= 0) return [];
  const pos = arr.filter(x => x > 0);
  const neg = arr.filter(x => x < 0);
  return [pos.length, neg.reduce((a, b) => a + b, 0)];
}
