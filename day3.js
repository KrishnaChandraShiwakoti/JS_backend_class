// syncronous statement
const variable = "Ram";
const variable2 = 2;
console.log(variable);
console.log(variable2);

// asyncronous statement
setTimeout(() => {
  console.log("this is an asyncronous statement");
}, 0);

console.log("End of program");

// promise/Future (any function that can take time)
const promiseFn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success return");
    }, 200);
  });
};

promiseFn()
  .then((result) => {
    // result is resolved
    console.log("Success");
    console.log(result);
  })
  .catch((error) => {
    // error
    console.log("Exception");
    console.log(error);
  });

console.log("Sakiyo");

const main = async () => {
  try {
    const result = promiseFn(); //blocks the execution
    // result is resolved
    console.log(result);
    console.log("Rest of the function");
  } catch (error) {
    // error is rejected
    console.log("Rejected", error);
  }
};

main();

// Task 1
const isEven = (num) =>
  new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(true);
    } else {
      reject(false);
    }
  });
const isPositive = (num) =>
  new Promise((resolve, reject) => {
    if (num > 0) {
      resolve(true);
    } else {
      reject(false);
    }
  });
// 1. run these function with async await, sequencially
// 2. run these function with .then and .catch, sequencially

const asyncFn = async () => {
  try {
    const isEvenVar = await isEven(3);
    const isPositiveVar = await isPositive(3);
    console.log("Async: ", isEvenVar);
    console.log("Async: ", isPositiveVar);
  } catch (error) {
    console.log("Async", error);
  }
};

asyncFn();

// isEven(5)
//   .then((result) => console.log("then isEven:", result))
//   .catch((error) => console.log("then error:", error));
// isPositive(-6)
//   .then((result) => console.log("then: isPositive: ", result))
//   .catch((error) => console.log("catch isPositive:", error));

// Non blocking

isEven(4)
  .then((result) => {
    console.log("Is Even: ", result);
    isPositive(4)
      .then((result) => {
        console.log("isPositive: ", result);
      })
      .catch((error) => console.log("IsPositive: ", error));
  })
  .catch((error) => console.log("isEven: ", error));

//   Parallel Promise

const parallelRun = async () => {
  try {
    const [result1, result2] = await Promise.all([isEven(4), isPositive(-4)]);
    console.log("IsEven: ", result1);
    console.log("IsPositive: ", result2);
  } catch (error) {
    console.log(error);
  }
};

parallelRun();

const parallelRun2 = async () => {
  try {
    const [result1, result2] = await Promise.allSettled([
      isEven(4),
      isPositive(-4),
    ]);
    console.log("IsEven: ", result1);
    console.log("IsPositive: ", result2);
  } catch (error) {
    console.log(error);
  }
};

parallelRun2();
