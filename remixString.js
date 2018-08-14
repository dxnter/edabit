function remix(str, arr) {
  return arr
    .reduce((rmx, pos, i) => {
      rmx[pos] = str.charAt(i);
      return rmx;
    }, [])
    .join('');
}
