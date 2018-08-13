function uniqueInOrder(sequence) {
  var arr = Array.isArray(sequence) ? sequence : sequence.split('');

  return arr.filter(function(val, index) {
    return arr[index - 1] !== val;
  });
}
