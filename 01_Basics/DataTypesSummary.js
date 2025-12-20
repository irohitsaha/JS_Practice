//! Primitive

//? 7types : string, number, bool, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id== anotherId);

const bigNumber = 5484651845618451654854n;


//! Reference( Non Primitive)

//? Array, Objects, Functions

const heros = ["ben10","ninja haturi"];

let myObj = {
    name: "Rohit",
    age : 22
}
console.log(typeof heros);

const myFunction = function (){console.log("Hello World")};

myFunction();