function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let multiple = max;

  for (let i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max;
      i = max;
    }
  }

  return multiple
}


let output = smallestCommons([23, 18]); // 6056820

console.log(output);
