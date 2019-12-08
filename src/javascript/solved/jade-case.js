/*
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
String.prototype.toJadenCase = function () {
  return this.split(' ').map(s=>s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
};
