// Singleton
// Object Create


// Object Literals

const mySym = Symbol("key1");
const JsUser = {
    name : "Rohit",
    age: 23,
    state: "WB",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Tuesday'],
    [mySym] : "myKey1", // this is the way to declare the symbol variable
    mySym: "MyKey2"
}

console.log(JsUser.lastLoginDays);
console.log(JsUser["age"]);  
console.log(JsUser[mySym]);

JsUser.age = 24;
console.log(JsUser["age"]); 

// Object.freeze(JsUser); //freeze all the objects values
JsUser.age = 25;
console.log(JsUser.age);

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js Users");
}

console.log(JsUser.greeting());
