function equal(a, b, c) {
  const uniq = Array.from(new Set([a, b, c]));
  if (uniq.length === 3) return 0;
  return 3 - uniq.length + 1;
}
 3
