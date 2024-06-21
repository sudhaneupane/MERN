// get the total value of object price

let list = [
  {
    name: "mobile",
    price: 10000,
  },
  {
    name: "battery",
    price: 8000,
  },
  {
    name: "earphone",
    price: 5000,
  },
  {
    name: "charger",
    price: 2000,
  },
];

let mapList = list.map((value, index) => {
  return value.price;
});
console.log(mapList);

let redList = mapList.reduce((pre, cur) => {
  return pre + cur;
}, 0);
console.log(redList);

// sort the array according to price
let li = [
  {
    name: "mobile",
    price: 10000,
  },
  {
    name: "battery",
    price: 8000,
  },
  {
    name: "earphone",
    price: 5000,
  },
  {
    name: "charger",
    price: 2000,
  },
];

let mli = li.map((value, index) => {
  return value.name;
});
console.log(mli);

let sli = mli.sort();
console.log(sli);

// make an arrow function if age is 25, console your ticket is free,if age is 26,console your ticket is 100,if age is other than 26,25 console your not allowed
let a = (age) => {
  if (age === 25) {
    console.log("Your ticket is free");
  } else if (age === 26) {
    console.log("Your ticket is 100");
  } else {
    console.log("You are not allowed");
  }
};
a(25);

// make an aroow function named Sum,pass 2 inputs and it must return the sum of num1 and num2 is num3
let Sum = (num1, num2) => {
  let num3 = `The sum is ${num1 + num2}`;
  console.log(num3);
};
Sum(8, 6);

// make an arrow function ,pass array of fruits , the function must return "The fruit contain apple" if the array contain apple.
// else return "the fruit doesnt contain apple"
let f1 = (fruits) => {
  if (fruits.includes("apple")) {
    console.log(`The fruit contain apple`);
  } else {
    console.log("The fruit doesnot contain apple");
  }
};
f1(["apple", "mango", "orange"]);

// number sort
let l = [1, 5, 8, 3, 6, 9, 4];
let output = l.sort((a, b) => {
  return b - a;
});
console.log(output);

// length sort
const s = ["ram", "ramesh", "hari", "javascript", "ax", "john"];
let ss = s.sort((a, b) => {
  return a.length - b.length;
});
console.log(ss);

// convert object into array
let info = {
  name: "ram",
  age: 30,
  isMarried: false,
};
let keysArray = Object.keys(info);
console.log(keysArray);

let valueArray = Object.values(info);
console.log(valueArray);

let propertyArray = Object.entries(info);
console.log(propertyArray);

// convert array into object
let listOfArray = [
  ["name", "ram"],
  ["age", 30],
  ["isMarried", false],
];
let o = Object.fromEntries(listOfArray);
console.log(o);


