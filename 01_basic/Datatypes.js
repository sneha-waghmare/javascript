// 1. Number - Int16Array,float, BigInt
// 2. String - char,String
// 3. boolean - true, false
// 4. Undefined - Not defined any value
// 5. null - Standalone value is empty
// 6. symbol - it is unique
// 7. NaN - Not number

let s ="123234ioi";
let convert = Number(s)
console.log(typeof(convert))  //number
console.log(convert)            //NaN

let a = "sneha";
let age = 18
console.log(typeof(a))          //string
console.log(typeof(age))        //number
console.log(typeof(undefined))  //undefined
console.log(typeof(null))       //object


// datatype conversin

let num = "12";
let num2 = "12aa";

console.log(typeof num)                //string
console.log(typeof num2)            //string
convert = Number(num)
let convert2 = Number(num2)
console.log(typeof convert)         //number
console.log(typeof convert2)        //number
console.log(convert2)               //NaN


// boolean


console.log(Boolean(""))            //false
console.log(Boolean("sneha"))       //true
console.log(Boolean(" 1 "))         //true
console.log( Boolean("0"))          //true


// string
num = 33
let st = String(num)
console.log(typeof st)