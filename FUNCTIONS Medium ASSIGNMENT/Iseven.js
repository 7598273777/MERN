  function isEven(num) {
    if (typeof num !== "number" || isNaN(num)) {
      return -1;
    }
    return num % 2 === 0;
  }

  console.log(isEven(12)); // Output: true
  console.log(isEven(0)); // Output: true
  console.log(isEven(11)); // Output: false
  console.log(isEven("11h")); // Output: -1


