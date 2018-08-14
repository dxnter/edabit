function accum(str) {
  str = Array.from(str.toLowerCase());
  return str
    .map((char, i) => {
      return char.toUpperCase() + char.repeat(i);
    })
    .join('-');
}
