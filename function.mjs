// callback function
// A callback function is a function passed into another function as an argument.

let f1 = () => {};

let f2 = () => {};

let f3 = () => {};

f2(f1, f3); //f1,f2 is a callback funtion
// f2 is a higher order function. map,filter,reduce are higher order function
// higher order function is which takes argument as function
// a function which returns another function is called higher order function

// JSON.stingify() => converts a javascript value to a Javascript Object Notation(JSON) string.
let info = {
  name: "ram",
  age: 20,
  location: "ktm",
};
let info1 = JSON.stringify(info);
console.log(info1);

// JSON.parse() => converts a Javascript Object Notation(JSON) string into an object.
let details = '{"name":"ram","age":20,"location":"ktm"}';
let makeObject = JSON.parse(details);
console.log(makeObject);
