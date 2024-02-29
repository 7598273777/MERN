function getOpposite(number) {
  if (number < 1) {
    return 0;
  }
  if (typeof number === "number" && !isNaN(number)) {
    return -number;
  } else {
    return -1;
  }
}

console.log(getOpposite(5)); // Output: -5
console.log(getOpposite(0)); // Output: 0
console.log(getOpposite(-5)); // Output: 5
console.log(getOpposite("5a")); // Output: -1
console.log(getOpposite(5.5)); // Output: -1
