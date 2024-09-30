// stack and heap 
//  stack is primitive datatype and heap is non-primitive datatype

// stack  => get reference from copy of variable
let name = "sneha"
let name2 = name
name2 = "waghmare"
console.log(name)
console.log(name2)

// heap  => get reference from address of variable

let n = {
    name: "sneha",
    email: "abc@gmail.com",
    id: 1243
}

n2 = n;
console.log(n)
n2.name = "ajjuu"
console.log(n)
console.log(n2)
