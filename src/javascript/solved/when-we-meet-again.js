/*
Bob and Charles are meeting for their weekly jogging tour.
They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length.
Since they know each other for a long time already, they both run at the exact same speed.
*/

function findMeetingRounds(bobsLapLength, charlesLapLength) {
    let leastCommonMultiple = lcm(bobsLapLength, charlesLapLength);
    return [leastCommonMultiple/bobsLapLength, leastCommonMultiple/charlesLapLength];
}

lcm = (a, b) => {
    return (a*b)/gcd(a,b);
}
gcd = (a, b) => {
  let temp = 0;
  while(b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}


console.log(findMeetingRounds(5, 3)[0] === 3);
console.log(findMeetingRounds(5, 3)[1] === 5);
console.log(findMeetingRounds(4, 6)[0] === 3);
console.log(findMeetingRounds(4, 6)[1] === 2);
console.log(findMeetingRounds(5, 5)[0] === 1);
console.log(findMeetingRounds(5, 5)[1] === 1);
