var obj = {
    name: "jegan",
    Course: "FSD",
    Age: 25,
    YOP : 2019,
};
function getProperty(obj, key) {
   return obj[key]
}
     

console.log(getProperty(obj, 'name'))
// Output : jegan