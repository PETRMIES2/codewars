function nerdify(text) {
  let replaceWith = {
    '4': new RegExp('a', 'ig'),
    '3': new RegExp('e', 'ig'),
    '1': new RegExp('l', 'g'),
  }
  let copy = text;
  for (let key in replaceWith) {
    copy = copy.replace(replaceWith[key], key);
  }
  return copy;
}
let original = 'Fundamentals';
console.log(nerdify(original), original);
