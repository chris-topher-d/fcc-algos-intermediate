function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return newArr.filter(item => {
    return newArr.indexOf(item) === newArr.lastIndexOf(item);
  });
}
