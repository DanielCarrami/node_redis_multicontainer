module.exports = function(n) {
  const cache = {};
  const fibonacci = (n) => {
    if (cache[n]) {
      return cache[n];
    }
    if (n < 2) {
      cache[n] = n;
      return n;
    }

    let solution = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = solution;
    return solution;
  }
  return fibonacci(n);
}
