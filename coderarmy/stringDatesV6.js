// ALL ABOUT STRING
const str1 = "dhbbvfnv"
// esko half part ko next line me le jaane pr error ayga

const str2 = 'dfdvfbf'

const day = 18
const str3 = `vjndfvnfdnbfn ${day}`
// ek variable ki value ko aise likhte hai backtics me

// lekin esme half part ko nexxt line le jaa ke print kr skte hai 


// console.log(str1.length)
// space bhi count hoga length me (space also considered as a character)
// console.log(str1[0])
// particular element accessed

// string are immutable in nature 
str1[0] = "J"
// not possible

// convert to uppercase
console.log(str1.toUpperCase())
console.log(str1)
// always new string di jayegi uppercase wali given string me koi changes ni honge

const c = str1.toLowerCase()
console.log(c)

const str = `Hello coder army code`;

console.log(str.indexOf('Cod'));
// if not present then it returns -1;
// IF any word present at many place then it return sthe first index

console.log(str.lastIndexOf('code'))
// it returns the last index of code 

console.log(str.includes('code'))
// if present then it returns true otherwise false (it checks whether an element is present or not)

// slice used for break the string
console.log(str.slice(2,7))
// last index is excluded
// if we give only first index then it slice upto last index in the string
console.log(str.slice(2))

console.log(str.slice(-4))
// it gives last 4 digit of the string


console.log(str.slice(-5,-2))
// start count as -1 -2 -3 -4 from the last and give value whose index is -5 -4 -3 

// about substring
console.log(str.substring(2,5))
// same work as slice but neg index not works here

// concatenation
const a  = "Arun";
const b = "Kumar"

const d = a + b
const e = a+" "+b
// multiple string can be attached

console.log(d)

console.log(12+15+"arun")

// replace it changes at only one place
// replaceall changes at every place

console.log(str.replace('code','dfjvn'))
console.log(str.replaceAll('code','cdvfd'))


// trim
const user = "   Arun   "
console.log(user.trim())
// it removes the spaces of first and last

console.log(user.trimStart())
// it removes the spaces only from start

const names = "Rohit,mohit,anjali,ayush"
console.log(names.split(","))
// it splits the value based on comma

// ALL ABOUT DATES

const now = new Date();

console.log(now)    //utc time
console.log(now.toString())  //ist me time milega
console.log(now.toISOString())
console.log(now.toLocaleString())

// if we want to know the day name in no 1 - sunday 2-monday 3-tuesday and so on....

console.log(now.getDay())
console.log(now.getDate()) //today's date
console.log(now.getFullYear())  //year

// month starts from 0 like 0 for jan 1 for feb 2 for march and so on...
console.log(now.getMonth())

console.log(now.getHours())  //it gives us hour

// want to create date by your own
const nowdate = new Date(2025,8,20,8,25,16,125)
// year month date hour min sec milisec

console.log(nowdate)

const now1 = Date.now()
// isse miliseconds me date ayegiii

// phir esko jb paas krenge tohh hme exact date form me milega

const dates = new Date(now1)

console.log(dates.toString())














