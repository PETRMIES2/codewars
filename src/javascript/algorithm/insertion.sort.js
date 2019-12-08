function insertionSort(unsorted) {
    let array = Object.assign([], unsorted);   // 1
    for (let j = 1; j < array.length; ++j) {   // n
        let value = array[j];                  // n-1
        let i = j - 1;                         // n-1
        while (i >= 0 && array[i] > value) {   // sum(n to j=2)
            array[i + 1] = array[i];
            i -= 1;
        }
        array[i + 1] = value;
    }
    return {
        "unsorted": unsorted,
        "sorted": array
    }
}

console.log(insertionSort([3, 1, 5, 24, 3, 4, 444, 3, 21, 234, 1245, 13254]));
