// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = NaN;
// let score = true;
let score = "hii";


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
true = 1/ false = 0
*/

console.clear();

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanLoggedIn));
console.log(booleanLoggedIn);

/*
1 = true/ 0 = false
"" = false
"hii" = true
*/
console.clear();

let someNumber = 33
let stringNumber = String(someNumber);
console.log(typeof(stringNumber));
console.log(stringNumber);