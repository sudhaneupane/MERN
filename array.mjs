// Array=[]
// map = callback and return method
/* Syntax: list.map((value,index)=>{
    return body}) */

/* 
let list=["a","b","c"]
// initially output =[empty]
let data =list.map((value,index)=>{
// return 5;
// return value;
// return index;
// return `${value}${index}`
console.log("Sudha");
return index;

})
console.log(data); 

 Use map method if both input and output array are same and bot input and output length are same   */

//  let list =[1,2,3,4]
//  let output=list.map((value,index)=>{
//     return value*2
//  })
//  console.log(output);

// let f1=(inputArr)=>{
//     let output=inputArr.map((value,index)=>{
//         return value*2
//     })
//     console.log(output);
// }
// export {f1}

// split => string to array
// join =>Array to string

// console.log("Sudha".split(""));
// console.log("sudha".split("u"));

// console.log(["s","u","d","h","a"].join(""));

// filter return only true or false
// let list=['a','b','c']
// let list1=list.filter((value,index)=>{
//     return true ;
// })
// console.log(list1);

// let list =['a','b','c','d']
// let list1=list.filter((value,index)=>{
//     if(value==='d'){
//         return true
//     }
//     else
//         return false
// })
// console.log(list1);

// let l=[1,2,3,6]
// let li=l.filter((value,index)=>{
//     // if(value===2 || value ===6){
//     //     return true
//     // }

//     if (value%2===0) {
//         return true
//     }
//     else
//         return false
// })
// console.log(li);

//find  returns the value that match the first value
// let li=[1,2,3,4]
// let le=li.find((value,index)=>{
//     return true
// })

// console.log(le);

// let input=[1,2,"sudha",true,false,"hello",'']
// let output=input.filter(Boolean)
// console.log(output);

// ['ram','hari','shyam','roshan'] =4>

// let arr = ["ram", "hari", "shyam", "roshan"];
// let output = arr.filter((value, index) => {
//   if (value.length > 4) {
//     return true;
//   } else return false;
// });

// console.log(output);


