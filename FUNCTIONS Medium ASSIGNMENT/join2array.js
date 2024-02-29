function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]


// OR

function mergeArrays(arr1, arr2) {
    const mergedArray = [];
    for (const element of arr1) {
        mergedArray.push(element);
    }
    for (const element of arr2) {
        mergedArray.push(element);
    }
    return mergedArray;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]
