let point = {
    x: 1,
    y: 2,
    z: {
        one: 3,
        two: 4
    }
};
/*let {
    x: a,
    y: b,
    z: {
        one: c,
        two: d
    }
} = point;*/
// OR
(
  {
      x: a,
      y: b,
      z: {
          one: c,
          two: d
      }
  } = point
);
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
