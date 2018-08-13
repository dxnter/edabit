function removeSpecialCharacters(str) {
  return str.replace(/[!\(\)\[\]\{\}~\|+=\?<>,`@#$%^&\.\*]/g, '')
}
