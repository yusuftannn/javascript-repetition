let value;

const firstName = "Yusuf";
const lastName = "Tan";

const langs = "Javascript, Python, C++";

value = firstName + lastName

value = firstName + " " + lastName

value = "Yusuf Tan "
value += "YBS"  // value = value + "YBS"

value = firstName.length;
value = firstName.concat
value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0]
value = firstName[4]
value = firstName[firstName.length - 1]

// Index Of
value = firstName.indexOf("Y")

// Char At
value = firstName.charAt("0")

// Split
value = langs.split(",");

// Replace
value = langs.replace("Python", "CSS")

// Includes  (true, false)
value = langs.includes("Java")


console.log(value)