function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }

  return arr;
}

let output = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}); // [3, 9, 2]
