function addTogether() {
  var args = [...arguments];
  return args.some(n => typeof n !== 'number') ?
    undefined :
    args.length > 1 ?
      args.reduce((acc, next) => acc += next, 0) :
      (next) => typeof next === 'number' ?
        next + args[0] :
        undefined;
}

let output = addTogether(2,3); // 5

console.log(output);
