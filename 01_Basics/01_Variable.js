const accountId = 144553;
let accountEmail = "rohit@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;

// accountId = 2; //Not Allowed
accountEmail = "hcl@gmail.com";
accountPassword = "2121212";
accountCity = "Delhi";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var, bcz of issue of block scope and functional scope
*/