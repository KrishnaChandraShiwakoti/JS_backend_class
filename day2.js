// function
// 1.
function hello() {
  console.log("Hello");
}

hello();
// 2.
const hello2 = function () {
  console.log("Hello 2");
};
hello2();
// 3.
const hello3 = () => {
  console.log("Hello world 3");
};
hello3();

// difference

function add(a, b) {
  return a + b;
}

var result = add(2, 5);
console.log(result);

const subtract = (a, b) => a - b; //arrow automatically returns
result = subtract(5, 3);
console.log(result);

const mul = (a, b) => {
  return a * b; // if arrow is scoped, we need to use return
};
result = mul(5, 3);
console.log(result);

const person = {
  firstName: "Ram",
  lastName: "Bahadur",
  fullName: function () {
    return this.firstName + this.lastName;
  },
  fullNameArrow: () => {
    // arrow in object cannot use this
    return this.firstName + this.lastName;
  },
};

console.log(person.fullName());
// console.log(person.fullNameArrow());

// destructing
const { firstName, lastName } = person;
console.log(firstName, lastName);

const { firstName: fname, lastName: lname } = person;
console.log(fname, lname);

// callbacks and closures
// closures
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("count: ", count);
  }
}
const counter1 = outer(); //counter 1 is inner function
// counter1();
// counter1();

const counter2 = outer(); // reset count to 0 for counter2

// callback, higher order function
function greet(name, callback) {
  callback(name);
}
function sayHello(name) {
  console.log("Hello " + name);
}
greet("Ram", sayHello); //output hello ram
greet("Krishna", (name) => console.log("HI, " + name));
greet("Krishna", (name) => console.log("Whatsup, " + name));

// 5 min classwork
// create a function calculate

function calculate(num1, num2, callback) {
  callback(num1, num2);
}

calculate(1, 2, (num1, num2) => console.log(num1 + num2));
calculate(1, 2, (num1, num2) => console.log(num1 - num2));
calculate(1, 2, (num1, num2) => console.log(num1 / num2));
calculate(1, 2, (num1, num2) => console.log(num1 * num2));

// List iterator and callbacks
const fruits = ["apple", "mango", "pineapple", "banana"];

fruits.forEach(
  // callback function
  (fruit, index) => console.log(index + ": " + fruit),
);

fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

const mapppedFruits = fruits.map((fruit) => "Fresh, " + fruit.toUpperCase());
console.log(mapppedFruits);

// ui example
const listFruits = fruits.map((fruit, index) => {
  return `<li id="${index}">${fruit}</li>`;
});

console.log(listFruits);

// filter
const filteredFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(filteredFruits);

const countFruits = fruits.reduce(
  (count) => count + 1, // count is accumulator, fruit is current value
  // 0 initial value
);
console.log(countFruits);
