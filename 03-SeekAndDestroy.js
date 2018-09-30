function destroyer(arr) {
  let args = [...arguments];
  return args[0].filter(item => !args.includes(item));
}
