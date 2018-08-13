function makeTitle(str) {
  return str
    .split(' ')
    .map(x => x.charAt(0).toUpperCase() + x.substring(1))
    .join(' ');
}

console.log(makeTitle('capitalize every word'));
