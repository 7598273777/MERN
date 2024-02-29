function getLastElement(arr) {
  if (arr.length === 0) {
    return -1;
  } else {
    return arr[arr.length - 1];
  }
}
// Output
console.log(getLastElement([1, 2, 3, 8]));
// Output: 8
