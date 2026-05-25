console.log("Typescript running");
let a = 4;
console.log(a);

let numberVar: number = 1;
// cannot change type after declaration
// numberVar="Hello"
// a="Hello"

console.log(numberVar, typeof numberVar); //

let stringVar: String = "Hello";
let booleanVar: boolean = true;
let anyVar: any = "Can be any type";
let unknownVar: unknown = 10;
// any can be assigned to unknown
// but unknown cannot be assigned to any without type assertion

anyVar = 123;
unknownVar = "Now i am a String";

console.log(stringVar, typeof stringVar);
console.log(booleanVar, typeof booleanVar);
console.log(anyVar, typeof anyVar);
console.log(unknownVar, typeof unknownVar);
// stringVar = anyVar; //can
// stringVar = unknownVar; //Error - cannot

// array
let numberArray: number[] = [1, 2, 3];
// using generic
let stringArray: Array<string> = ["a", "b", "c"];
let anyArray: any[] = [1, "two", true];
console.log(numberArray, stringArray, anyArray);

// tuples
let user: [string, number] = ["alice", 30];
console.log(user[0], typeof user[0]);

// typescript
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(5, 10));
const option = (x?: number, y?: number): number => {
  return 0;
};
console.log(option());
console.log(option(5, 10));

const optionalDefault = (fname: String = "Ram") => {
  return "Hello " + fname;
};
console.log(optionalDefault()); //fname default
console.log(optionalDefault("Sham")); //fname default overridden

let fruits: string[] = ["pineapple", "apple", "mango", "cherry", "banana"];

const fruitsFn = (fruit: string[] = []): string[] => {
  return fruit.filter((f) => f.length > 5);
};

console.log(fruitsFn(fruits));
