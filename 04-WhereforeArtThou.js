function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (collection[i][keys[j]] !== source[keys[j]]) {
        break;
      } else if (j === keys.length - 1) {
        arr.push(collection[i]);
      }
    }
  }
  // Only change code above this line
  return arr;
}
