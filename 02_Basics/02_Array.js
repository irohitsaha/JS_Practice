console.log("Working");

const marvelHeros = ["thor", "IronMan", "SpiderMan"];
const dcHeros = ["SuperMan", "Flash", "BatMan"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);

console.log(marvelHeros.concat(dcHeros));

const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

console.clear();

const anotherArray = [1,2,3,[4,5,6],7,8,[9,10,[4,5]]];
const myAnotherArray = anotherArray.flat(Infinity);
console.log(myAnotherArray);

console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name: "Rohit"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));