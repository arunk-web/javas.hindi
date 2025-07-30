// crate constant variable 
const accountID = 14452
let accountEmail = "arun123@gmail.com"
var accountPassword = "12345" 
accountCity = "jaipur"
// hm es trh city bhi define kr skte hai 

// accountID = 2  it is not allowed becoz it was mentioned as const variable 
let accountState;
// state change ho skte hai esliye let use kro 
// agr value nhi di gyi hai toh "undefined" print hoga (in accountstate)
/*
prefer not to use var because of issue 
in block scope and functional scope 
*/

accountEmail = "arun@hc.in"
accountPassword = "123123"
accountCity = "mumbai"

console.log(accountEmail);

// agr multiple values select krna ho toh
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
// esse ek table form me output ayega 
