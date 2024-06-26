// Array is a collection of values whereas object is collection of key value pair. key value pair is known as properties.

// let info={
//     name:"Sudha",
//     age:55,
//     address:"Kathmandu"
// }
// // get
// console.log(info.name);
// // rename
// info.name="Sumi"
// console.log(info.name);
// info.address="Pokhara"
// console.log(info.address);
// // delete
// delete info.age
// console.log(info);

/* let data={
    name:"Ram",
    age:25,
    name:"Sita"
}
console.log(data);  //  Duplicate key doesn't exist, if exist override by below code */

/* let data={
    name:"ram",
    favFruits:["apple","orange"],
    location:{
        country:"Nepal",
        provience:"Bagmati",
        city:"Kathmandu"
    },
    age:()=>{
        console.log("Hello i am ram and i am 20 years old");
    }
}
console.log(data.favFruits[1]);
console.log(data.location.city);
data.age(); */

/* // alias =>Alias means changing variable names. Once you change variable names you can call it by changed name.
let {
    name:fullName,
    age:year,
    isMarried
}={
    name:"ram",
    age:52,
    isMarried:true
}
console.log(fullName); */

// this keyword
/* let info={
    name:"ram",
    surname:"paudel",

    fullName:function () {
        console.log(this.name);
        console.log(this.surname);
    }
}
console.log(info);
info.fullName() */

// This is destructure of object
// let planet=["moon",'sun']
// /* let a=planet[0]
// let b=planet[1] */
// let[a,b,c="Venus"]=planet   //here c is a default value
// console.log(a,b,c);

// Spread Operator=> ...

// let planet=["sun","moon","earth"]
// let[planet1,...rest]=planet
// console.log(planet1);
// console.log(rest);

let name = ["ram", "shyam", "hari"];
let data = ["school", "kathmandu", "nepal"];
let totalData = ["this is a data ", ...data, ...name];
console.log(totalData);

// Optional Chaining
let user = [
  {
    name: "anish",
    location: {
      country: "Nepal",
      city: "Ktm",
    },
  },
  {
    name: "Samir",
  },
  {
    name: "rijan",
    location: {
      country: "china",
      city: "tmk",
    },
  },
];
user.forEach((value, index) => {
  console.log(value.location?.city);
});

let info = {
  name: "Ram",
  age: 20,
  locaton: "ktm",
};

// get
console.log(info.age);
console.log(info.name);

// set
info.name = "radha";
console.log(info.name);

// delete
delete info.age;
console.log(info);

let data1 = {
  name: "hari",
  favFruits: ["apple", "watermelon", "papaya"],
  location: {
    city: "ktm",
    country: "nepal",
    village: "china",
  },
  age: () => {
    console.log("my name is hari");
  },
};
console.log(data1.name);
console.log(data1.favFruits[2]);
data1.age();

let data2 = {
  firstName: "ram",
  middleName: "prasad",
  lastName: "regmi",
  fullName() {
    console.log(this.firstName, this.middleName, this.lastName);
  },
};
data2.fullName();
