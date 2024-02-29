function calculateDistance(x1, y1, x2, y2) {
  const xDistance = x2 - x1;
    const yDistance = y2 - y1;
// We use Here Pythogrous Therom to solve 
  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
}

// Example usage
const distance = calculateDistance(1, 5, 9, 6);
console.log(distance.toFixed(0)); // Output: 5
