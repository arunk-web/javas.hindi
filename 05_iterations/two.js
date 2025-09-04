console.log();



//filter operationn
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num ) => num > 4)    //values greater than 4  ye () lagayenge toh khud return kr dega
console.log(newNums);

//lekin agr curly bracket lagaynege toh return keyword likhna pdegaa  like,,,
const mynew = newNums.filter( (val) => {   //ye scope start hua haiii esliye return likhaaa
    return val > 4     //agr return nhii likhoge toh nii print hoga
})

console.log(mynew);

//by use if condition
const newArr = []
myNums.forEach( (num) => {
    if(num > 4){      //push after checking.........."""sb same hai"""
        newArr.push(num)
        
    }
})

console.log(newArr);


//examples of books
const books = [
    { title : 'book one',genre : 'fiction',publish : '1987', 
    edition : 2010 },
    { title : 'book two',genre : 'non fiction',publish : '1988', 
    edition : 2011 },
    { title : 'book three',genre : 'history',publish : '1989', 
    edition : 2012 },
    { title : 'book four',genre : 'science',publish : '2020', 
    edition : 2013 },
    { title : 'book five',genre : 'history',publish : '2010', 
    edition : 2014 },
]

let userBooks = books.filter((bk) => bk.genre === 'history')
userBooks = books.filter( (bk) => {      ////ye ek scope wali condition haiii return use hogaaa tbhi answer ayegaa 
    return bk.publish >= 2000  && bk.genre === 'history'
})

console.log(userBooks)

//ans: [
//   {
//     title: 'book three',
//     genre: 'history',
//     public: '1989',
//     edition: 2012
//   },
//   {
//     title: 'book five',
//     genre: 'history',
//     public: '1991',
//     edition: 2014
//   }
// ]

//use of map.................
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const val = myNumbers.map( (num) => {      //or write simple num+10
    return num + 10 
})

console.log(val);
//ans:[
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]


//double map use kr skte hai
const values = myNumbers.map( (nums) => nums*10).map( (val) => val + 1)

console.log(values);
// ans:[
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]

//additional use of filter method with two maps
const value = myNumbers.map( (nums) => nums*10).map( (val) => val + 1).filter( (v) => v >= 40)
console.log(value);
//ans :  [
//   41, 51,  61, 71,
//   81, 91, 101
// ]
