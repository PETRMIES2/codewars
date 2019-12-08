/*
In this kata you're given an n x n array and you're expected to traverse the elements diagonally from the bottom right to the top left.

*/


function diagonal(arr) {
  let copyOf = arr.slice(0);
  for (let i = 0; i < arr.length; ++i) {
    for (let x = 0; x < i; ++x) {
      copyOf[x].unshift(undefined);
    }
    copyOf[i] = copyOf[i].reverse();
  }
  copyOf = copyOf.reverse();
  let result = [];

  let columnsToScan = copyOf[copyOf.length-1].length;
  for (let x = 0; x < columnsToScan; ++x) {
    for (let z = copyOf.length - 1; z >= 0; --z) {
      if (copyOf[z][x] !== undefined) {
        result.push(copyOf[z][x]);
      }
    }
  }
  return result;

}

let sourceArray = [
  [4, 5, 7],
  [3, 9, 1],
  [7, 6, 2]
];
let sourceArray2 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l'],
  ['m', 'n', 'o', 'p']
];
let arr3 = [ [ 6, 8, 13, 13, 8, 2, 13, 6 ],
  [ 5, 4, 0, 0, 13, 9, 14, 5 ],
  [ 4, 13, 8, 5, 13, 9, 7, 0 ],
  [ 8, 9, 10, 8, 7, 9, 9, 6 ],
  [ 8, 0, 11, 11, 6, 13, 14, 6 ],
  [ 6, 10, 4, 12, 3, 13, 11, 3 ],
  [ 1, 2, 2, 1, 12, 7, 10, 14 ],
  [ 12, 1, 1, 6, 13, 10, 11, 2 ] ];
let result = diagonal(arr3);
console.log(result);
