function truthCheck(collection, pre) {
  return collection.every(obj => {
    return obj.hasOwnProperty(pre) && obj[pre];
  });
}

let output = truthCheck([
  {"user": "Tinky-Winky", "sex": "male"},
  {"user": "Dipsy", "sex": "male"},
  {"user": "Laa-Laa", "sex": "female"},
  {"user": "Po", "sex": "female"}], "sex"); // true

console.log(output);
