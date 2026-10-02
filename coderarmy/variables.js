// let var const 
// const is used to declare a variable that cannot be reassigned. It creates a read-only reference to a value. However, if the value is an object or array, the contents of the object or array can still be modified.
// let is used to declare a block-scoped variable that can be reassigned. It allows you to create variables that are limited in scope to the block, statement, or expression in which they are used.
// let can be reassigned, but it cannot be redeclared in the same scope. It is generally preferred over var for variable declarations due to its block-scoping behavior and reduced risk of accidental redeclaration.  
// var can be redeclared and updated within its scope. It is function-scoped, meaning it is accessible throughout the entire function in which it is declared. However, var has some quirks and can lead to unexpected behavior, so it is generally recommended to use let or const instead.

// data types
// primitives data types => string, number, boolean, null, undefined, symbol
// upr me null ke chorkr sbka type khud ka hota hai and null ka type object hota hai, ye ek historical quirk hai. null ko explicitly check karna chahiye (value === null) ya (value == null) ka use karke.
// they are immutable, meaning their values cannot be changed once they are created. Non-primitives data types are mutable, meaning their values can be changed after they are created.
let b  = 10
b = 20

// esme ab b ki value 20 ho gayi, iska reason ye hai ki primitives data types immutable hote hai, meaning unki values ko change nahi kiya ja sakta hai. lekin yaha pe humne b ko reassign kiya hai, isliye b ki value 20 ho gayi.
// b ab 20 ko point kr rha h lekin memroy me 10 abhi bhi h



// non-primitives data types => object, array, function
// esme har kisi ka type object hota hai, chahe wo array ho ya function ho ya object ho. ye ek historical quirk hai. inko explicitly check karna chahiye (value instanceof Array) ya (typeof value === 'function') ya (typeof value === 'object') ka use karke.



// primitives data types are immutable, meaning their values cannot be changed once they are created. Non-primitives data types are mutable, meaning their values can be changed after they are created.
let a = 10
console.log(a);

let user; //undefined
console.log(user);
// .undefined is a primitive data type that represents the absence of a value or an uninitialized variable. It is automatically assigned to variables that have been declared but not yet assigned a value. When you try to access a variable that has not been assigned a value, it will return undefined.
// .assigned by programmer to a variable to indicate that it has no value or is intentionally left empty. It can be used to explicitly indicate that a variable is empty or has no meaningful value.


// bigint
// 8 bytes => 64 bits
// max 2^53 - 1 => 9007199254740991
// min -2^53 + 1 => -9007199254740991

//  null

let v = null
console.log(b);


// null is a primitive data type that represents the intentional absence of any object value. It is often used to indicate that a variable or property does not currently have a value or that it is empty. When you assign null to a variable, it means that the variable is explicitly set to have no value or reference to any object.
// symbol
// symbol is a primitive data type that represents a unique and immutable value. It is often used as a key for object properties to ensure that the property names are unique and do not conflict with other properties. Each time you create a new symbol, it is guaranteed to be unique, even if it has the same description as another symbol. Symbols are commonly used in scenarios where you want to create private or hidden properties in objects, or when you want to define constants that should not be accidentally overwritten.
// typeof operator
// The typeof operator is a unary operator that returns a string indicating the type of the operand. It can be used to determine the data type of a variable or value in JavaScript. The possible return values of typeof include "undefined", "object", "boolean", "number", "string", "function", and "symbol". It is commonly used for type checking and debugging purposes in JavaScript code.''
// null ke type ko check krne ke liye typeof operator ka use kiya jata hai, lekin ye "object" return krta hai, iska reason ye hai ki JavaScript me null ko ek object ke roop me treat kiya jata hai. Ye ek historical quirk hai aur isse avoid karne ke liye aapko null ko explicitly check karna chahiye, jaise ki (value === null) ya (value == null) ka use karke.

// Symbol ka type symbol hota hai, aur ye unique aur immutable value ko represent karta hai. Symbol ka use object properties ke liye kiya jata hai, jisse property names unique ho jaye aur kisi bhi dusre property ke sath conflict na ho. Har bar jab aap naya symbol create karte hain, to ye guaranteed hota hai ki wo unique hoga, chahe uska description kisi dusre symbol ke sath same ho. Symbols ka use private ya hidden properties create karne ke liye ya constants define karne ke liye kiya jata hai, jisse accidentally overwrite na ho.
// har koi khud ke type ka hai except null, null ka type object hai, ye ek historical quirk hai. null ko explicitly check karna chahiye (value === null) ya (value == null) ka use karke.


// define an objext

const obj = {
    name : "arun",
    age : 23,
    isMarried : false,
    address : "djnn"
}

// obj.name = "rohit"   //objext ke andar ki value change ho gayi hai, iska reason ye hai ki non primitives data types mutable hote hai, meaning unki values ko change kiya ja sakta hai. lekin primitives data types immutable hote hai, meaning unki values ko change nahi kiya ja sakta hai.
  

console.log(typeof obj);  //dot notation


// array
let arr = [10,10,"rohit",true,undefined,null,Symbol("id"),obj]

// its type objext

// non primitives data types are mutable, meaning their values can be changed after they are created. Primitives data types are immutable, meaning their values cannot be changed once they are created.

let arr2 = [10,20,30,40,50]
arr2[0] = 100
console.log(arr2);   //ans : [100,20,30,40,50]  //esme arr2 ki value change ho gayi hai, iska reason ye hai ki non primitives data types mutable hote hai, meaning unki values ko change kiya ja sakta hai. lekin primitives data types immutable hote hai, meaning unki values ko change nahi kiya ja sakta hai.       

// immuatable data types are immutable, meaning their values cannot be changed once they are created. Mutable data types are mutable, meaning their values can be changed after they are created.
let c = 10
let d = c

d = 20
console.log(c,d);   //ans : 10  //esme c ki value change nahi hui hai, iska reason ye hai ki primitives data types immutable hote hai, meaning unki values ko change nahi kiya ja sakta hai. lekin yaha pe humne d ko reassign kiya hai, isliye d ki value 20 ho gayi. 
// c abhi bhi 10 ko point kr rha h lekin memroy me 20 abhi bhi h


