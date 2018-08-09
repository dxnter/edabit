function nameShuffle(str) {
  const [first, last] = str.split(' ');
  return `${last} ${first}`;
}
