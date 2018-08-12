function highLow(str) {
  const high = Math.max(...str.split(' '));
  const low = Math.min(...str.split(' '));
  return `${high} ${low}`;
}
