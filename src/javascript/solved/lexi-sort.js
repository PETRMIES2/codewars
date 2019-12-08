sort = (array1, array2)=> {
  return array1.filter(word=>array2.some(otherWord=>otherWord.indexOf(word) >=0)).sort();
}

let array1 = ["arp", "live", "strong"]
let array2 = ["lively", "alive", "harp", "sharp", "armstrong", "armstrong"]
console.log(sort (array1, array2));
