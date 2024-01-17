// console.log("Hello world!");
// let name = "Mutty"
// console.log(name);
// name = "Olaide";
// console.log(name);
// let age = 57;
// let newAge = 13;
// let percentage = (newAge/age)
// console.log(percentage)
// let myString = "hi";
// let otherString = 'Hello';
// let backtick = `Hi Again`;
// let num = 7;
// let bol = true;
// let undefinedVariable;
// let emptyValue = null;
// console.log(num);
// console.log(myString);
// console.log(otherString);
// console.log(backtick);
// console.log (bol);
// console.log (undefinedVariable)
// console.log (emptyValue)
// console.log(typeof myString);
// console.log(typeof bol);
// console.log(typeof emptyValue);

// String methods 
let string = "Javascript";
firstLetter = string[3];
console.log(firstLetter);
console.log(string.length);
console.log(string.length-1);
console.log(string.toUpperCase())
console.log(string.toLowerCase())

let text = "Programming"
console.log(text.substring(1, 3));
console.log(text.substr(1, 4));

let day = "30 Days of Javascript"
console.log(day.split())
console.log(day.split(" "));
console.log(day.includes("Days"));

let title = "javascript"
let lastIndex = title.length-1
console.log(title.charAt(lastIndex))
console.log(title.indexOf("j"));
console.log(title.replace("javascript", "Asabeneh"));
console.log(day.replace("Days", "months"));

// Assignment Operators
let numOne = 5;
let numTwo = 4;
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, remainder, powerOf);

// Comparison Operators
let first = 3;
let second = 2;
console.log(first>second);
console.log(first<second);
console.log(first==second);
console.log(first===second);
console.log(first <= second);

// console.log()
console.log(1 == true);
console.log(0 == true);
console.log(0 == false);
console.log(0 === false);

// Logical Operators
let check = 4 > 3 && 10>5;
let see = 4 > 3 && 5>10;
console.log(check, see);

let compare = 4 > 3 || 10 > 5;
let value = 4 > 3 || 10 < 5
console.log(compare, value);

// Negation Operation

let negate = !(4 < 3);
let result = !true;
console.log(result, negate);

// Increment and Decrement Operators
let count = 5;
console.log(++count);
console.log(count++);
let num = 5
num--;
console.log(num);

// Ternary Operators
let isAMan = true;
isAMan ? console.log("Yes, he is a man"):
console.log("No, he is not a man");

