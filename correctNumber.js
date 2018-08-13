function isValidPhoneNumber(str) {
  return /^\(\d{3}\) \d{3}-\d{4}$/gi.test(str);
}
