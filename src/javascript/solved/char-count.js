/*
 Count characters ordered by count and char from given source.
 No need to check undefined

 "Example" => e:2, a:1,l:1, m:1, p:1,x:1
*/

function count(text) {
  let result = {};
  let splitted = text.toLowerCase().split('').sort();
  for (let i = 0; i < splitted.length; ++i) {
    let char = splitted[i];
    result[char] = (result[char] || 0) + 1;
  }
  let sortByCount = (a, b) => result[b] - result[a];
  return Object.keys(result)
    .sort(sortByCount)
    .reduce((_sortedObj, key) => ({
    ..._sortedObj,
    [key]: result[key]
  }), {});

}

let original = 'Example';
console.log(count(original));
