function steamrollArray(arr) {
  let newArr = [].concat(...arr);
  if (newArr.some(Array.isArray)) {
    return steamrollArray(newArr);
  } else {
    return newArr;
  }
}

let output = steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]

console.log(output);
