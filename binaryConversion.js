function binaryConversion(str) {
  if (!str) return '';
  return str.match(/.{1,8}/g).reduce((result, x) => {
    return (result += String.fromCharCode(parseInt(x, 2)));
  }, '');
}

