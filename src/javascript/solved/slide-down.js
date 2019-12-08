// This solves Problem 18 / Problem 67 /.. on ProjectEuler.
function longestSlideDown (pyramid) {
   return fromDownToUp(copy(pyramid));
}

fromDownToUp = clonedPyramid => {
    let height = clonedPyramid.length;
    for(let i = height-2; i >= 0; i--) {
       for(let j = 0; j <= i; j++) {
         clonedPyramid[i][j] += Math.max(clonedPyramid[i+1][j], clonedPyramid[i+1][j+1]);
       }
    }
    return clonedPyramid[0][0];
}

copy = array => {
  return array.map(function(arr) {
    return arr.slice();
  });
}
