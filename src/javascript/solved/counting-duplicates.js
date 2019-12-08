function duplicateCount(text = ''){
  let lowerCase = text.toLowerCase();
  var frequency = {};
   lowerCase.split('').forEach(char=> {
     frequency[char] = (frequency[char] || 0) + 1;
   });
   let filtered = Object.filter(frequency, count => count > 1);
   return Object.keys(filtered).length;
 }

 Object.filter = (obj, predicate) =>
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

// "aaabsdsadxgs" => 3
