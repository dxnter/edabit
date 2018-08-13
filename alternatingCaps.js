function alternatingCaps(str) {
  return Array.from(str)
    .map((x, i) => {
      if (i % 2 === 0) {
        return x.toUpperCase();
      }
      return x.toLowerCase();
    })
    .join('');
}
