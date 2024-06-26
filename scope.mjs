// scope => A variable will be known within its block for the line where it is defined
// {}
// {
//   let a = 1;
//   console.log(a);
// }
// console.log(a);

// {  //parent block
//     let a=1
//     {   // child block
//         console.log(a);
//     }
//     console.log(a);
// }
// when a variable is called,first it is searched in its own block, if variable is not in its block then it will search for its parent block

// {
//     let a=1;
//     {
//         a=10
//         console.log(a);
//     }
//     console.log(a);
// }
// A variable cannot be redefined in the same block, but we can redefine same variable in different block.

console.log("1" == 1); //true because it doesnt check the data type of the value
console.log("1" === 1); //false because it checks the datatype and value at the same time

console.log(1 + 1);
console.log("a" + "b");
console.log("a" * "b"); //NaN

let a;
console.log(a); //undefined means variable is defined but not initialized.

// rest or spread   ...
// rest operator always placed at last parameter
let { ...rest } = {
  name: "ram",
  age: 20,
  isMarried: true,
};

console.log(rest);

let sum=(a,...b)=>{
    console.log(a);
    console.log(b);
}
sum(1,3,8,5,7,8,4,65,8)

// spread
let arr=[1,2,3,4,5]
let arr1=["ram","shyam","hari"]
let output=[2,4,5,...arr1,6,8,...arr,5,8,"javascript"]
console.log(output);


let info={
    name:"ram",age:20,isMarried:true
}
let info1={...info}
console.log(info1);

let info2={...info,location:"kathmandu"}
console.log(info2);


// scope chaining =>{{{}}}
  if (true){
    let a=1;
    // parent block
    if(true){
        let a=5
        // child block
        if(true){
            let a=6;
            // grand child block
            console.log(a);
        }
    }
}

// lexical scope => It is a scope of a parent. (only parent)

// setTimeout
// setTimeout(f1,delaytime)
console.log("a");
setTimeout(()=>{
    console.log("This is set timeout");
},1000)
console.log("b");
// setTimeout function will get execute at last.

