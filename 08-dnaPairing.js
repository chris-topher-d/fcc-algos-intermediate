function pairElement(str) {
  let pairs = [['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C']];
  return str.split('').reduce((acc, next) => {
    pairs.forEach(pair => {
      if (pair[0] === next) acc.push(pair);
    });
    return acc;
  }, []);
}
