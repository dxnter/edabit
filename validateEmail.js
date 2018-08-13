function validateEmail(str) {
  return /\w+.?\w+?@\w+\.\w+/g.test(str);
}

module.exports = validateEmail;
