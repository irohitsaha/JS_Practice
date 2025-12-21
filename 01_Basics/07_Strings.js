const name = "Rohit"
const repoCount = 50;

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const name1 = new String("Rohit-RS");
console.log(name1);


console.log(name1[2]);
console.log(name1.__proto__);
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(2));
console.log(name1.indexOf("t"));

const newString = name1.substring(0,4);
console.log(newString);

const anotherString = name1.slice(-8, 4);
console.log(anotherString);

const newString1 = "  rohit   ";
console.log(newString1);
console.log(newString1.trim());

