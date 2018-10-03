function translatePigLatin(str) {
  for (let i = 0; i < str.length; i++) {
    if ((/[aeiou]/i).test(str[0])) {
      return str + 'way';
    } else if ((/[aeiou]/i).test(str[i]) && i !== 0) {
      return str.slice(i) + str.slice(0, i) + 'ay';
    }
  }
  return str + 'ay';
}
