/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/
function humanReadable(sec) {

    var hours   = Math.floor(sec / 3600);
    var minutes = Math.floor((sec - (hours * 3600)) / 60);
    var seconds = sec - (hours * 3600) - (minutes * 60);

    return [hours, minutes, seconds].map(v=>formatValue(v)).join(':');
}

formatValue = value => {
  if (value < 10) {
    return '0'+value;
  }
  return value;
}

console.log(humanReadable(443)) //=> 00:07:23
