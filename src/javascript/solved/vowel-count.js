function getCount(str) {
   return (str || "").split('').filter(c => "aeiouAEIOU".includes(c)).length;
}


console.log(getCount('This is vowel count'));
