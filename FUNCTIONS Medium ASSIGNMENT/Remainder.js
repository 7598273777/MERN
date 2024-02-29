function remainder(a, b) {
  var c = a % b;
  if (c >= 1) {
    return c;
  } else if (c < 0) {
    return c;
  } else {
    return 0;
  }
}
var res = remainder(-9, 45);
console.log(res); // Output : -9