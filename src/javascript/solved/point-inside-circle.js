function pointInCircle(x,y){
  let radius = 1;
  let sqrt = a => Math.sqrt(a);
  let abs = a => Math.abs(a);
  let pow2 = a => Math.pow(a,2);
  let result = abs(pow2(x)) + abs(pow2(y));
  console.log(sqrt(result));
  console.log(Math.hypot(x,y));
  return sqrt(result) < radius;
}

console.log(pointInCircle(1.5,1));
