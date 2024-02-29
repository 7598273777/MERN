function addProperty(obj, key) {
  obj[key] = true;
}

var obj = {};
addProperty(obj, "mykey");
addProperty(obj, "jegan");

console.log(obj); // Output: { mykey: true }
