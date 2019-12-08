/*
Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
*/
function duplicateEncode(word = ''){
  let lowerCaseWord = word.toLowerCase();
   return lowerCaseWord.split('').reduce((a,b)=> {
        if (lowerCaseWord.indexOf(b) === lowerCaseWord.lastIndexOf(b)) {
           return a + '(';
        }
           return a + ')';
    }, '');
}
