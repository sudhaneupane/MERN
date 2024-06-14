// console.log("Hello World");
// console.log("This is a office");
// console.log("help");


/* 
JavaScript is a asynchronus and single threaded language.

If two numbers are added ,it produces an output of sum and if strings are added it concat and produces output as a string. */

/* let age=50;
console.log(age);

age=20
console.log(age); */

/* let num1=1;
let num2=3
console.log(num1+num2);
console.log(`THIS IS NUM1: ${num1}`);   //this is template literal */

/* let name="sudha's"
console.log(name);
we cannot use double quotes inside double quotes and we also cannot use single quotes inside single quotes
*/


/* 
console.log(1+2+3+"5t"); 
 If we add a number and string,the interpreter converts the number into a string and concatenates both together.
*/

/* 
let address="KTM"
let address="Boudha"
console.log(address);

 We cannot use same variable name twice =>throws error
*/

// console.log("1"+2+3);  //shows 123 as string because string precedence is high
// console.log(1+2+"3");  //shows 33 as it goes from left to right

/* let num1=1;
let num2=3;
let message=`${num1}`
let sum=`The sum of ${num1} and ${num2} is ${num1+num2}`
console.log(sum); */


// truthy or falsy value

// let a=!!""
// console.log(a);  prints false

// let a=!!'string'
// console.log(a);  prints true

// single string is falsy value other are truthy value
// 0 is also a falsy value others are truthy ...

// === is a strict check

// console.log(1===2);  return false because === only checks same 

/* let a=true
if (!a) {
    console.log("i am if ");
}else
{
    console.log("i am else");
} */
// In if else statement condition block is always wrapped by parenthesis

// let name='name';
// if (name==="hari") {
//     console.log("I am imposter" );  
// }
// else if (name==="ram") {
//     console.log("I am another imposter");   
// }
// else{
//     console.log("i am other");
// }


// if the value is true single not (!) makes it false
// double not (!!) converts the value into boolean

// let name="yay"
// if (name) {
//     console.log("a");
// }
// else{
//     console.log("b");
// }


// let f1=function(){
//     console.log("I am function ");
// }
// f1()

// // A function will not execute unless it is called. We have to call function to execute the function code block.~ 

// let f2=function(a,b){
//     console.log("I am another function");
//     console.log(a+b);
// }
// f2(5,9)

// let multiply=function(num1,num2,num3=8){
//     let result=num1*num2*num3
//     console.log(result);
// }
// multiply(2,3)   // It is not necessary to have same number of argument and parameters

//function with return
// let f1=function (){
//     return "Helo"
// }
// let data=f1()            calling the function and storing in the data variable
// console.log(data);  ********************a variable is needed to store the return value********************


// let f1=()=>{}        arrow function


// let age=19
// let f2=()=>{
//     if(age<9){
//         console.log("Hi youre small ");
//     }
//     else if(age>18){
//         console.log("Hi you can go to club");
//     }
// }
// let data=f2()

// let add=(num1,num2)=>{
//     let result=num1+num2;
//     return console.log(result);
// }
// let finalResult=add(2,8)


// JavaScript is dynamic language because a variable can be stored different value at a different time.