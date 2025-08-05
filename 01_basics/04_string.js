// ALLL ABOUT STRINGS IN JAVASCRIPT//

const name = "arun"
const repoCount = 50
// old technique is concatation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //name method ${} inside (``)


const gamename = new String('arun,ku,mar')  //in single quotes

console.log(gamename[7]);   //index accessing 
console.log(gamename.length);   //length accessing
console.log(gamename.toUpperCase());   //convert in uppercase
console.log(gamename.charAt(2));    // for finding character at a particular index i.
console.log(gamename.indexOf('k'));    //for finding the index of any character

const newString = gamename.substring(0,4);   //for accessing substring
console.log(newString);

const anotherString = gamename.slice(-5,-1);  //new method (also accept neg val that prints from the back)
console.log(anotherString);

const newStringOne = "    Arun    "
console.log(newStringOne);
console.log(newStringOne.trim());  //used to remove extra spaces 

const url = "http://arunk.com/arun%20kumar"   
console.log(url.replace('%20' , '-'));   //for replacing one thing with another


console.log(url.includes('30'))  //for finding any word whether it is present or not..


console.log(gamename.split(','));  //used to split any string on the basis of any character ans will be =>  [ 'arun', 'ku', 'mar' ]









