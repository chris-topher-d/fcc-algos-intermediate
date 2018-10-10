function sumFibs(num) {
  let fibNums = [1, 1];

  while (fibNums[fibNums.length - 1] < num) {
    fibNums.push(fibNums[fibNums.length - 2] + fibNums[fibNums.length - 1]);
  }

  let oddFibs = fibNums.filter(fib => fib % 2 !== 0 && fib <= num);

  return num > 1 ? oddFibs.reduce((a, b) => a + b) : num;
}

let output = sumFibs(4000000); // 4613732

console.log(output);
