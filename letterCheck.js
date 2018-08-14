function letterCheck(arr) {
  const [first, second] = arr;
  return Array.from(second.toLowerCase()).every(char =>
    first.toLowerCase().includes(char)
  );
}
