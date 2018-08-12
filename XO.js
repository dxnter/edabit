function XO(str) {
  let xOccurance = 0;
  let yOccurance = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      xOccurance++;
    } else if (str[i].toLowerCase() === 'o') {
      yOccurance++;
    }
  }
  return xOccurance === yOccurance;
}
