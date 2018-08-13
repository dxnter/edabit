/*
  x arg - Number of subarrays contained within the main array
  y arg - Number of items contained within each subarray(s)
  z arg - Item contained within each subarray(s)
*/

function matrix(x, y, z) {
  const arr = [];
  for (let i = 0; i < x; i++) {
    arr.push([]);
    for (let sub = 0; sub < y; sub++) {
      arr[i].push(z)
    }
  }
  return arr;
}

module.exports = matrix;
