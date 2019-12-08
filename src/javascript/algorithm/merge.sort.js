function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle, array.length);
  return merge(mergeSort(leftArray), mergeSort(rightArray));

}

function merge(leftArray, rightArray) {
  let result = [];
  let length = leftArray.length + rightArray.length;
  for (let k = 0, i = 0, j = 0; k < length; ++k) {
    if (leftArray[i] <= (rightArray[j] || Infinity)) {
      result[k] = leftArray[i];
      ++i;
    } else {
      result[k] = rightArray[j];
      ++j;
    }

  }
  return result;
}

let unsorted = [3, 1, 1, 43, 5, 4];
console.log(unsorted);
console.log(mergeSort(unsorted));
