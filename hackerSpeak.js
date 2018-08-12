function hackerSpeak(str) {
  let codedStr = '';
  Array.from(str).forEach(char => {
    switch (char) {
      case 'a':
        codedStr += '4';
        break;
      case 'e':
        codedStr += '3';
        break;
      case 'i':
        codedStr += '1';
        break;
      case 'o':
        codedStr += '0';
        break;
      case 's':
        codedStr += '5';
        break;
      default:
        codedStr += char;
        break;
    }
  });
  return codedStr;
}
