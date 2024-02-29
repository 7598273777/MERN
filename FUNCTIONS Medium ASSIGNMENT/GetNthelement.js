function getNthElement(arr, n) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[n];
  }
}
// Output 
console.log(getNthElement([1, 3, 5], 1)); // Output: 3
