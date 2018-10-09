function convertHTML(str) {
  let symbols = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'":  '&apos;'
  };

  return str.split('').map(char => {
    return symbols[char] ? symbols[char] : char;
  }).join('');
}

let output = convertHTML("Dolce & Gabbana");

console.log(output);
