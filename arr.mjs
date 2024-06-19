// import { f1 } from "./array.mjs";

// let fun=f1([2,4,8,7]);
// console.log(fun);

// foreach doesnot use return keyword
// let list=[1,2,3]
// let output=list.forEach((value,index)=>{
//    console.log(index);;
// })


// includes only returns true or false
// let arr = ["ram", "hari", "shyam", "roshan"];
// let output=arr.includes("hari")
// console.log(output);

// push =>push value to last
// pop  =>remove value from last
// unshift  =>adds value to beginning
// shift    =>remove value from beginning

// let list =[5,1,2,3,4]
// // list.push(5)
// // list.pop()
// // list.unshift(9)
// list.shift()

// console.log(list);



// sort method sorts from ascending to descending
// doesnt sort integers
// let list=['d','e','z','h','a','t',"A",'g']
//     // list=['Sudha',"sumi",'A']
// list.sort()
// console.log(list);


// slice
// let l=[1,2,3,4]
// let newl=l.slice(2)
// let anotherl=l.slice(-1)  //can be used to get last value
// console.log(newl);
// console.log(anotherl);

// reduce
// find the sum of all elements of array
// let list=[1,2,3,4]
// let newlist=list.reduce((pre,cur)=>{
//     return pre+cur
// },1)
// console.log(newlist);


// find the sum of all even elements of an array
// let arr=[1,2,3,5,8,10]
// let filterell=arr.filter((value,index)=>{
//     if(value%2===0)
//         return true
//     else return false
// })
// let redval=filterell.reduce((pre,cur)=>{
//     return pre+cur
// },0)
// console.log(redval)