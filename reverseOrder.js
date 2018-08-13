function reverse(str) {
  return str.split(' ')
    .map(word => {
      if (word.length >= 5)
        return Array.from(word)
          .reverse()
          .join('');
      return word;
    })
    .join(' ');
}

module.exports = reverse;

console.log(reverse('Reverse'));