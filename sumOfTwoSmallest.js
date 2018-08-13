function sumTwoSmallestNums(arr) {
  arr = arr.filter(x => x > 0);
  const one = arr.splice(arr.indexOf(Math.min(...arr)), 1);
  const two = arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return Number(one) + Number(two);
}