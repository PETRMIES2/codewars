let memoize = func => {
  const cache = {};
  return x => {
    cache[x] = cache[x] || func(x);
    return cache[x];
  }
}

let powerOf2 = x => {
  console.log(`No-memoize: Calculating ${x}^2 ${Math.pow(x,2)}`);
  return Math.pow(x,2);
}

let fs = memoize(powerOf2);
console.log(fs(4));
console.log(fs(5));
console.log(fs(3));
console.log(fs(4));
console.log(fs(5));
console.log(fs(3));
