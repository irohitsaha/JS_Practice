//! stack(primitive), heap(non-primitive)

//? primitive = we get copy
//? non-primitive = we get referenced value


let name = "Rohit";
let myname = name;

// console.log(name); //rohit
// console.log(myname); //rohit

myname = "rohit01";

console.log(name); //rohit
console.log(myname); //rohit01

let user = {
    email : "rohit@gmail.com",
    upi : "user@ybl"
}

let user2 = user;

console.log(user); //{email: 'rohit@gmail.com', upi: 'user@ybl'}
console.log(user2); //{email: 'rohit@gmail.com', upi: 'user@ybl'}

user2.email = "rohit01@gmail.com";

console.log(user); //{email: 'rohit01@gmail.com', upi: 'user@ybl'}
console.log(user2); //{email: 'rohit01@gmail.com', upi: 'user@ybl'}