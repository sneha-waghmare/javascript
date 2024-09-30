// assign negative value
let value = 3;
let negvalue = - value
console.log(negvalue)

// Arithmatic operations + - * / % ++ --

console.log("Hellow " + " world")   //hellow  world
console.log(1 + "2")                //12
console.log("1"+ 2)                 //12
console.log("1"+2+2)                //122
console.log(1+2+"2")                //32

console.log("2" > 1)                //true
console.log("02">1)                 //true
console.log("1" > 1)                //false

console.log(null > 0)                //false
console.log(null == 0)              //false
console.log(null < 0)                 //false
console.log(null >= 0)              //true
console.log(null <= 0)              //true

console.log(undefined > 0)                //false
console.log(undefined == 0)              //false
console.log(undefined < 0)                 //false
console.log(undefined >= 0)              //false
console.log(undefined <= 0)              //false

console.log("2" == 2)                   //true
console.log("2" === 2)                  //false


let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id == anotherId)        //false
console.log(id === anotherId)       //false
console.log(id != anotherId)        //true

// BigInt

const bigNumber = 12287985766546697989n
console.log(bigNumber)

// array
const friends = ["sneha", "shruti", "priti", "priya", "swati"]
console.log(friends)
console.log(typeof(friends))        //object

// object
let myObject = {
    name: "sneha",
    age: 19
}
console.log(myObject)
console.log(typeof(myObject))       //object
console.log(myObject.name)          //sneha
console.log(myObject.age)           //19

// function

const myfunction = function(){
    console.log("hello world");
}

console.log(myfunction)             //[function: myfunction]