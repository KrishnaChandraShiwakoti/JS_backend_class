// CRUD
let arr1 = [1, 2, 3];

// spread operator
let arr2 = [4, 5, 6];
let arr3 = [arr1, arr2];
let arr4 = [...arr1, ...arr2];

console.log(arr3);
console.log(arr4);

let arr5 = [...arr1, 5, 6, ...[7, 8]];
console.log(arr5);

// destructe spread
const [num1, num2, ...rest] = arr5;
console.log(num1, num2, rest);

// spread in object
let obj1 = { name: "Ram", age: 20 };

obj1 = {
  ...obj1,
  grade: "A",
  lastName: "Bahadur",
  ...{ isActive: true },
};

console.log(obj1);

let students = [
  { id: 1, name: "Ram", grade: 60 },
  { id: 2, name: "Shyam", grade: 80 },
  { id: 3, name: "Hari", grade: 70 },
];

// create
students.push({ id: 4, name: "Gita", grade: 75 });
students = [...students, { id: 5, name: "Sita", grade: 85 }];
console.log(students);

// update --> find and update
// find
let found = students.find((s) => s.id == 1);
// if not found , it will be undefined
found.name = "shyam bahadur";
console.log(students);

// update by index
let foundIndex = students.findIndex((s) => s.id == 3);
students[foundIndex].grade = 85;
console.log(students);

// delete
students.splice(foundIndex, 1);
console.log(students);
students.splice(
  0, //where to start
  1, //how many to delete
);
console.log(students);

// Task, Create a CRUD application to simulate api behaviour/functions
// make use of list function, promise, async-await
