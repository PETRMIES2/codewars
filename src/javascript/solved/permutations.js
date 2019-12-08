//Pretty slow. Should be optimized.
// Really awful algorithm
function permutations(source) {
  let start = new Date().getMilliseconds();
  let result = generate(source);
  console.log(new Date().getMilliseconds() - start);
  return result;
}

generate = (text) => {
  // var arr = text.split(''), tmp = arr.slice(), heads = [], out = [];
  // if(text.length == 1) return [text];
  // arr.forEach(function(v, i, arr) {
  //   if(heads.indexOf(v) == -1) {
  //     heads.push(v);
  //     tmp.splice(tmp.indexOf(v), 1);
  //     generate(tmp.join('')).forEach(function(w) {out.push(v + w);});
  //     tmp.push(v);
  //   }
  // });
  // return out;

  if (text.length <= 1) {
    return [text];
  }
  let result = [];
  let permutations = factorial(text.length);
  let permutationsPerCharacter = permutations / text.length;
  let characterIndex = 0;
  let arr = text.split("");
  let textSource = removeCharacterAt(characterIndex, text);
  for (let index = 0; index < permutations; ++index) {

    if (textSource.length > 1) {
      generate(textSource).forEach(c => {
        let value = text.charAt(characterIndex) + c;
        if (result.indexOf(value) === -1) {
          result.push(value);
        }
      });
    } else {
      let res = switchIndexValueWithNext(index, text);
      if (result.indexOf(res) === -1) {
        result.push(res);
      }
    }
    if (index > 0 && index % permutationsPerCharacter === 0) {
      ++characterIndex;
    }
  }
  return result;
}
removeCharacterAt = (index, string) => string.slice(0, index) + string.slice(index + 1, string.length);
switchIndexValueWithNext = (sourceIndex, sourceText) => {
  let text = sourceText.split("");
  let temp = text[sourceIndex];
  text[sourceIndex] = text[sourceIndex + 1];
  text[sourceIndex + 1] = temp;
  return text.join("");
}
factorial = number => {
  let result = 1;
  for (let temp = 2; temp <= number; ++temp) {
    result *= temp;
  }
  return result;
}

console.log(permutations('aab56'));
// console.log(permutations('abcd'));
// console.log(permutations('abc'));
//console.log(permutations('ab'));
/*
function permutations(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}*/
