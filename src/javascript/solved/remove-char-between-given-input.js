function sevenAte9(string) {
  if (string === undefined) {
    return string;
  }
  let cutChar = '7';
  let removeChar = '9';
  let removeNineBetweenSevens = (element, index, array) => !(array[index] === removeChar && array[index - 1] === cutChar && array[index + 1] === cutChar);
  return string.split('')
      .filter(removeNineBetweenSevens)
      .map(value => value)
      .join('');
}
console.log(sevenAte9('79712312123987987789464134987987464987979878978979897987876412'));
console.log(sevenAte9('79797'));
console.log(sevenAte9('7'));
console.log(sevenAte9());

console.log('12345'.split('').reverse());
