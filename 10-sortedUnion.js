function uniteUnique(arr) {
  return [].concat([...arguments]).reduce((acc, next) => {
    if (!acc.includes(next)) acc.push(next);
    return acc;
  }, []);
}
