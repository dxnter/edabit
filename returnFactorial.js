function factorial(int) {
  let max = int;
  let sum = 1;
  while (max > 0) {
    sum *= max;
    max--;
  }
  return sum;
}
