function digital_root(n) {
    if (n < 10) {
      return n;
    }
    let sum = String(n).split('').reduce((current, next) => {
        return +current + +next;
    }, 0);
    return digital_root(sum);
}
function shorterVersion(n) {
  return (n - 1) % 9 + 1;
}

console.log(digital_root(493193));
console.log(shorterVersion(493193));
