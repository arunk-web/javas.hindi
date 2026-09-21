// let var const 
// const is used to declare a variable that cannot be reassigned. It creates a read-only reference to a value. However, if the value is an object or array, the contents of the object or array can still be modified.
// let is used to declare a block-scoped variable that can be reassigned. It allows you to create variables that are limited in scope to the block, statement, or expression in which they are used.
// let can be reassigned, but it cannot be redeclared in the same scope. It is generally preferred over var for variable declarations due to its block-scoping behavior and reduced risk of accidental redeclaration.  
// var can be redeclared and updated within its scope. It is function-scoped, meaning it is accessible throughout the entire function in which it is declared. However, var has some quirks and can lead to unexpected behavior, so it is generally recommended to use let or const instead.

// data types
// primitives data types => string, number, boolean, null, undefined, symbol
// non-primitives data types => object, array, function

// primitives data types are immutable, meaning their values cannot be changed once they are created. Non-primitives data types are mutable, meaning their values can be changed after they are created.
let a = 10
console.log(a);

let user; //undefined
console.log(user);

// bigint
// 8 bytes => 64 bits
// max 2^53 - 1 => 9007199254740991
// min -2^53 + 1 => -9007199254740991

 

