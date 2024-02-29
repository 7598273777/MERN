function getFullName(firstName, lastName) {
  if (firstName != "" && lastName != "") {
    return firstName + " " + lastName;
  } else {
    return firstName + lastName;
  }
}
// Test
console.log(getFullName("GUVI", "GEEK")); // Output: "GUVI GEEK"
console.log(getFullName("GUVI")); // Output: "GUVI"
console.log(getFullName("", "GEEK")); // Output: "GEEK"
console.log(getFullName("", "")); // Output: ""
