function getProducts(arr) {
  return arr.map((x, mI) => {
    return arr.reduce((sum, curr, rI) => {
      if (rI === mI) return sum;
      return sum * curr;
    });
  });
}
