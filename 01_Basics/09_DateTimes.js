let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

console.clear();

let myCreatedDate = new Date(2023,0,23); //2023 year, 0 starting of the month, in js month is starts from 0, 23 date
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.getTime()); 

console.clear();

let myTimeStamp = Date.now();
console.log(myTimeStamp); 

console.clear();

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());

newDate.toLocaleDateString('default', {
    weekday: "long"
})



