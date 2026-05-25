// Variable Types
// let, const, var

const name = "John";
// name = "Doe"; //  Error: cannot reassign const

let age = 30;
age = 31; //  Allowed

var isActive = true;
var isActive = false; //  Allowed (but not recommended)

if (true) {
  const lastname = "Doe";
  let firstname = "Ram";
  var city = "Kathmandu";

  console.log(lastname); //
  console.log(firstname); //
  console.log(city); //
}

console.log(city); //  Works because var is function-scoped

let stringVar = "hello,world";
let numberVar = 10;
let longNumberVar = 980778n;
let booleanVar = true;
let nullVar = null;
let unDefinedVar;
let symbolVar = Symbol("unique");
let symbolVar2 = Symbol("unique");

console.log(stringVar, typeof stringVar);
console.log(numberVar, typeof numberVar);
console.log(longNumberVar, typeof longNumberVar);

let score = 85;
if (score > 85) {
  console.log("distinction");
} else if (score == 85) {
  console.log("exacatly 85");
} else {
  console.log("fail");
}

let day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
}

let num1 = 5;
let num2 = "5";
console.log(num1 == num2);
const arr1 = ["apple", "banana", "kritan"];
console.log(arr1[1]);
arr1.push("kt");
arr1.unshift("kritan");
console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[1]);
}

for (const fruit of arr1) {
  console.log(fruit);
}

for (const index of arr1) {
  console.log(arr1[index]);
}

const person1 = {
  firstname: "kritan",
  secondname: "nepali",
  age: 10,
  isStudent: true,
  hoobies: ["singing", "guffadi", "negetive in padai"],
  adress: {
    city: "kathmandu",
    street: "thamel ki rand",
  },
};
console.log(person1);
console.log(person1.firstname);
console.log(person1.secondname);
console.log(person1.hoobies[1]);

const stu1 = {
  name: "kritan",
  address: {
    city: "kathmandu",
    street: "thamel",
  },
};
const stu2 = {
  name: "kripan",
  address: {
    city: "kathmandu",
    street: "thamel",
  },
};
