function removeProperty(obj, key) {
  delete obj[key];
}

var obj = {
  name: "Jegan",
    age: 30,
  YOP : 2019
  
};

removeProperty(obj, "name");

console.log(obj); // Output: { age: 30, YOP: 2019 }
