// datatype conversion
let score = 33  //now its datatype is Number

let score1 = "33" // string

// console.log(typeof score1);

// ab muhje jaise convert krna haii (string to number)
let valueInNumber = Number(score1)

// console.log(typeof(valueInNumber));


//"33" => 33
// "33abc" => NaN
// true converted to 1 and false converted to 0;


// important
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// 1 converted to true,,,,0 converted to false
// case of empty string => false answer
// "hitesh" =>true  (string me aise kuch hoo)



// Various type of operation..
// as we studied earlier,, +-*/%,<,>,==,,no try some new which are
console.log(1+"2");
console.log("1"+2);   // start with a string
console.log("1"+"2");  //ye toh simple hai hi it is a example of "Concatanation"
console.log(1+2+"2");  //start with number
console.log(2 + "3" + 4);
console.log(2 +1+ "3" + 4);

// some other type of conversions (other data type case)
console.log("2" > 1);   //string and integer true ans
console.log("02" > 1);  // true ans

//visit website
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);   //value conversion takes place 

// case of undefined   #sare case me answer false ayega
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// primitive and non primitive data type
// refer to notebook
// primitive data type example 
const score2 = 100;
const scorevalue = 52.5
const outsidetemp = null

const id = Symbol('123')
const anotherId = Symbol('123')
// always return false on comparing 

console.log(id == anotherId);  //false

const bigNumber = 324565521535n //use of bigInt
// const means constant the assigned value can't be changed
// non primitive data typee example
// array object function

const heros = ["superman","batman"] // array
let obj = {    //object example
            name : "Arun", 
            age : 21    // store in key value form(any data types)
            
}


// functionn ka data type object function bola jata hai..


// define a function
const myfunction = function(){
    console.log("hello world");
}

console.log(typeof(heros));




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (used in primitive type)and heap memory(mom primitive)





















