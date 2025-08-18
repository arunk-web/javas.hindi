// array
//method to declare
const myArr = [1,2,3,4,6]    //const array name = [elements in square bracket]
const myHeros = ["hero","superman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]) //access an element

// Array method
myArr.push(6) // for adding element in array
console.log(myArr);
myArr.pop() //remove last value

myArr.unshift(9) //for adding element at the front (all values are shifted by 1)
console.log(myArr);

myArr.shift();  //for delting the first element and return it
console.log(myArr);

console.log(myArr.includes(6));  //element present or not
console.log(myArr.indexOf(3));  // it returns index of any value

const newArr = myArr.join()  //it changes type into strings
console.log(newArr)  // type : string

// slice splice

console.log("A" , myArr);    //Ans: A [ 1, 2, 3, 4, 6 ]

const part = myArr.splice(1,3)    //Ans: [1, 2, 3 ](last range included)
console.log(part)
console.log(myArr)  //Ans: [ 1, 6 ]  splice maine array se range wale element ko remove kr deta hai
// main diff. b/w slice and splice, splice array ko manipulate krta hai but slice nhi






// ************************ lec-15 start********************
const hero1 = ["batman","superman","ironman"]
const hero2 = ["hulk","spiderman","captain america"]

hero1.push(hero2)
console.log(hero1)  //new array esme ek element ki trh behave kregi

console.log(hero1[3][2])   //array ke andr array ke element fetch kr rhe


// concatinatation ke case me add ho jata hai  //2nd method to do this
const allheroes = hero1.concat(hero2)
console.log(allheroes);

// 3rd method is to spread
const all_heroes = [...hero1, ...hero2]  //spread method , all values are printed indivisually
console.log(all_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //array inside array we need to write all in one array
const real = another_array.flat(Infinity);      //use .flat(depth(kitne lvl tk value nikaalni hai)) 
console.log(real);

console.log(Array.isArray("Arun"))
// convert the given data into an array
console.log(Array.from("Hitesh"))    //Ans: [ 'H', 'i', 't', 'e', 's', 'h' ]


// important (below one)
console.log(Array.from({name : "hitesh"})) //interesting
// esme batana pdega ki key se array banana hai ya value..agr nhi bna payega toh empty array return krega 


// formatation of array from given data
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))   //Ans :  [ 100, 200, 300 ]





