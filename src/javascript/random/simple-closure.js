let multiply = y => x => x*y;

let multiplyByTen = multiply(10);

for (let x = 1; x <= 10; ++x) {
  console.log(multiplyByTen(x));
}
