// async function always returns a promise , other values are wrapped in a promise automatically.

// Promises

// let Promise = new Promise((resolve, reject) => {
// resolve and reject are two callbacks provided by javascript.
// });

console.log("red");
setTimeout(() => {
  for (let i = 0; i < 5; i++) {
    console.log("1");
  }
}, 3000);
console.log("panda");

// resolve:if the job is finished successfully
// reject:if the job fails

// try-catch
// The code in the try block is executed first and if it throws error exception, the code in the catch block is executed

try {
  console.log(value);
} catch (error) {
  console.log("string");
}
