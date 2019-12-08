function substringer(text) {
  var result = '';
  for (var i = 0; i <= text.length; ++i) {
    result += text.slice(0, i); // or substring
  }
  return result;
}
let original = 'Code';
const expected = 'CCoCodCode';
const result = substringer(original);
if (result !== expected) {
  throw `Assert false '${expected}' != '${result}'`;
}

console.log('Substringer works');
