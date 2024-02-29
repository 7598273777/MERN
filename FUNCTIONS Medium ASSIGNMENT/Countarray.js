var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var countPositivesSumNegatives = function (arr) {
  var countPositives = 0;
  var sumNegatives = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositives++;
    } else if (arr[i] < 0) {
      sumNegatives += arr[i];
    }
  }

  return [countPositives, sumNegatives];
};

var result = countPositivesSumNegatives(arr);
console.log(result); // Output: [5, -17]
