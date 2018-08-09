function reverse(bool) {
  if (Boolean(bool) !== bool) return 'boolean expected';
  return !bool;
}
