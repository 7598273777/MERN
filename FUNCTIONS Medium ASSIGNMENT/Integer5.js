function divisibleByFive(a) {
  var c = a % 5;
  if (c >= 1 || c < 0) {
    console.log("False");
  } else {
    console.log("True");
  }
}
var divisible = divisibleByFive(37);
// Output : False 
