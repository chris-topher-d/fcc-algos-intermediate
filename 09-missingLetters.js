function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let firstIndex = alphabet.indexOf(str[0]);
  let lastIndex = alphabet.lastIndexOf(str[str.length - 1]) + 1;
  let letters = alphabet.slice(firstIndex, lastIndex).split('');
  return letters.filter(letter => {
    return !str.split('').includes(letter)
  })[0];
}

let output = fearNotLetter("abce"); // 'd'

console.log(output);
