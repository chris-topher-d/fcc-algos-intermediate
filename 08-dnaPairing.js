function pairElement(str) {
  let pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  return str.split('').map(letter => {
    return [letter, pairs[letter]];
  });
}

let output = pairElement("GCG"); // [["G", "C"], ["C","G"],["G", "C"]]

console.log(output);
