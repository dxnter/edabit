function keysAndValues(obj) {
  return [
    Array.from(Object.keys(obj)),
    Array.from(Object.keys(obj).map(key => obj[key]))
  ];
}
