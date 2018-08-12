function missingNums(arr) {
  arr.forEach((x, i) => {
    if (i > 0 && arr[i + 1] !== x + 1) {
      return x;
    }
  })
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));

[7, 2, 3, 6, 5, 9, 1, 4, 8]➞ 10

[10, 5, 1, 2, 4, 6, 8, 3, 9]➞ 7