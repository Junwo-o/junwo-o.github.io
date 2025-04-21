const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

let myNumber = 420;
let myFloat = 4.2;
let myString = "Hello, World!";
let Mystring = "Hello, World again!"; // Different than the above.

const firstName = "Jonathan";
const lastName = "Ma";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

// === is == and !== is !=

let myObj = { name: "John", age: 31, city: "New York" };
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
// JSON.stringify() is used to convert a JavaScript object into a JSON string.
// JSON.parse() is used to convert a JSON string into a JavaScript object.
let myNewObj = JSON.parse(myJSON);
console.log(myObj);

//arrow functions = shorthand way of writing functions
let addnums = (n1, n2) => {
    return n1 + n2;
};
  
let addNums = (n1, n2) => n1 + n2;

// array of dictionaries, use push() to add new elements like .append() in Python
const courses = [
    { teacher: "John Denero", course: "CS 61A" },
    { teacher: "Paul Hilfinger", course: "CS 61B" },
    { teacher: "Nick Weaver", course: "CS 161" },
    { teacher: "Dan Garcia", course: "CS 61C" },
  ];
  
courses.push({ teacher: "Josh Hug", course: "Data 100" });

// method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }
  
// method 2
cities.forEach(function (city) {
    console.log(city);
 })

let fruits = ["apple", "orange", "banana"];
let another_fruits = [...fruits, "papaya"]; //["apple", "orange", "banana", "papaya"]