// Primitive and Non-Primitive

// Primitive :In JavaScript, a primitive data type is a data that is not an object and has no methods or properties. => call by value.
// string
// number
// boolean
// null
// undefined

// Non-primitive / reference data type:  => call by reference
// array
// object
// function

let ar1 = ["sudha", "sudha", "yaya", "nnine", "nnine"];
console.log(ar1);
let ar2 = [...new Set(ar1)];
console.log(ar2);

// ternary operator
// let age=20;
// if (age>18) {
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

let age = 20;
let canDrive = age > 18 ? "you can drive" : "you cannot drive"; // (condition)?true:false
console.log(canDrive);
