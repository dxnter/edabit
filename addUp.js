function addUp(num) {
  let start = 1;
  let sum = 0;
  while (start <= num) {
    sum += start;
    start++;
  }
  return sum;
}
