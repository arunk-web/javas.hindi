const score = 400   //aise number define kr skte hai but
console.log(score);

const balance = new Number(100.859);
console.log(balance);    //Ans : [Number: 400]

console.log(balance.toString().length); //it converts from number to string 

// console.log(typeof(val));

console.log(balance.toFixed(2))   //esme decimal places ke baad dekhte hai (round off) ...//for this balance should be a number

// use .toPrecision(value)
const otherNum = 123.8996

console.log(otherNum.toPrecision(3));  //3 value pe focus krna haii(focus on it smj nhii aya )

const hundreds = 1000000   //method to represent zero in a good way(difficult to count zero)
console.log(hundreds.toLocaleString('en-IN'));  //Ans:  10,00,000








//+++++++++++++++++++++++ Math +++++++++++++++++++++++++++
console.log(Math)   //OBJECT HAI

console.log(Math.abs(-2));   //for converting negative to positive
console.log(Math.round(4.8));  //for roundoff

console.log(Math.ceil(4.5))    //ceiling value(upper)
console.log(Math.floor(8.8));   //neeche wali value

console.log(Math.max(8,9,2,4,6))   //for finding max value
console.log(Math.min(8,9,2,4,6))   //for finding min value

console.log(Math.random());   //its value in between 0 to 1
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min )



