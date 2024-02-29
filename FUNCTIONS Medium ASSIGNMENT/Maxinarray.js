function findMax(arr) {
  return Math.max(...arr); // Spread Operator used here
}

const numbers = [3, 6, 1, 8, 2, 10];
console.log(findMax(numbers)); // Output: 10


// OR

function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) { // For loop for Iterating each array elements 
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers = [3, 6, 1, 8, 2, 10];
console.log(findMax(numbers)); // Output: 10
