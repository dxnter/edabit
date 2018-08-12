function capMe(arr) {
  return arr.map(name => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1));
}
