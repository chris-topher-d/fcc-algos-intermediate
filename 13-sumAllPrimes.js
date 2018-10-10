function sumPrimes(num) {
  let primes = [];

  for (let i = 2; i <=num; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0 && j !== 1 && j !== i) {
        break
      } else if (j === i) {
        primes.push(i);
      }
    }
  }

  return primes.reduce((a, b) => a + b);
}

let output = sumPrimes(10); // 17

console.log(output);
