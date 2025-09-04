//for loop

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

for(let i = 0 ; i < 10 ; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;                   //ye krenge toh 5 nhi print hogaaa......
    }
    console.log(`value of i is ${i}`);
}

//while loop

let idx = 1

while(idx < 10){
    console.log(idx);
    idx++;
}

//traverse in an array
let myarr = ['1','2','3','4']

let i = 0;

while(i < myarr.length){
    console.log(`value is : ${myarr[i]}`);
    i+=2;
}

//do while loop
//phle kaam ho rha fir condtion check ho rhi hai
let score = 1;

do{
    console.log(`score is : ${score}`);
    score++;
} while(score < 1)

//for of loop

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
    
}

const greetings = "Hello World!"
for(const val of greetings){
    // if(val == " "){
    //     continue;
    // }
    console.log(val);
}


//map,used to store unique values  (maps are iteratable nd can't be traverse through for in loop)
const map = new Map();   //declare a map (key value pair)
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')


console.log(map);
// ans:Map(3) {
//   'IN' => 'INDIA',
//   'USA' => 'UNITED STATES OF AMERICA',
//   'FR' => 'FRANCE'
// }

//print using for of loop
for(const [key,value] of map){
    console.log(key, ':-', value);
}

//ans:IN :- INDIA
//    USA :- UNITED STATES OF AMERICA
//    FR :- FRANCE


//TRAVERSE on objects
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}


for(const key in myObject){  //this is how traversal in objects takes place using for in loop
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


//for each loop
const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (val){     //for each ke andr function lagakr printkro
    console.log(val);                   //easy use more  [function name(){ }]
})
// ans: js
// ruby
// java
// python
// cpp

//using arrow function
coding.forEach( (item) => {     //same answer ayega eska bhiii
    console.log(item);              //yha pr full array, index,item
    
})

function printMe(item){    //es function ko jo doge wo print kr degaaaa
    console.log(item);
    
}

coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    
})

// ans:  js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//      ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//      java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//      python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//        cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


const mycoding = [      //objects inside arrayyyy
    {
        languageName : "javaScript",
        languageFileName: "js"
    },

    {
        languageName : "java",
        languageFileName: "java"
    },

    {
        languageName : "python",
        languageFileName: "py"
    }
]

//array ke andr object ko kaise print kre '
mycoding.forEach( (item) => {
    
    console.log(item.languageName);
    
})








