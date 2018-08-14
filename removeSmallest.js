function removeSmallest(arr) {
  return arr.filter((e, i) => i !== arr.indexOf(Math.min(...arr)));
}
