function sumCSV(s) {
  // Split the input string into an array of strings using the comma as the separator
  const numbers = s.split(",");

  // Initialize a variable to store the sum
  let sum = 0;

  // Iterate over the array of strings and add each number to the sum after converting it to a float
  for (let i = 0; i < numbers.length; i++) {
    sum += parseFloat(numbers[i]);
  }

  // Return the final sum
  return sum;
}

// Example usage
console.log(sumCSV("1.5,2.3,3.1,4,5.5,6,7,8,9,10.9")); // Output: 57.3
