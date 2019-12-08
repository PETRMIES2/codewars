let romanNumerals = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1,
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900
}

function solution(roman) {
  let numbers = roman.split('')
  let grouped = [];
  for (let i = 0; i < numbers.length; ++i) {
    let currentAndNext = numbers[i] + numbers[i + 1];
    if (romanNumerals[currentAndNext] !== undefined) {
      grouped.push(romanNumerals[currentAndNext]);
      ++i;
    } else {
      grouped.push(romanNumerals[numbers[i]]);
    }
  }
  return grouped.reduce((num, current) => num + current);
}
console.log(solution('CMCDXCXLIXIV'));
