
let randomArray = ['b', 'c'];
console.log(...randomArray);
console.dir(...randomArray[0]);
console.dir(['a', ...randomArray, 'd']);

let log = val => console.log(val);
arr = [$=>log(4)]; for (i of arr) { i() }

let logTest = val => val;
var safe = `not ${logTest(1)} safe`
var safe2 = `not ${logTest`4`} safe`

console.log(safe);
console.log(safe2);

let value = +{[log`4`]: 1};
console.log(value);
