/*
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

function removeSmallest(numbers) {
  let copyOfArray = (numbers || []).slice(0);
  let smallestNumber = Math.min(...copyOfArray);
  copyOfArray.splice(copyOfArray.indexOf(smallestNumber),1);
  return copyOfArray;
}
