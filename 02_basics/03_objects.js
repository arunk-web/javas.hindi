// singleton
// ***********************//Lec-16\\************************************//
// object literals
const JsUser = {}  //it is a way to create object(now it is an empty object coz of no values)

// object ke andr (key : value) pair hote hai 
// interview question : symbol define krke object me use kro sooo
const mySum = Symbol("key7")

const JsUser1 = {     //baki hm aise define krte hai object in the form of key value pair
    name : "arun",
    age : 21,
    location : "lucknow",
    [mySum]: "key7",      //aise square bracket me krte hai symbol ko define(SYNTAX)
    email : "arun@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","tuesday"]

}

// way to access object values
console.log(JsUser1.name);   //(right answer,but a wrong way)
console.log(JsUser1["name"]);   //right way (square bracket ke andr string ki trh paas kro)
console.log(JsUser1[mySum]);   //AISE symbol ko access krte hai

// ways to change the object values
JsUser1.email = "arun@microsoft.com"  
Object.freeze(JsUser1)    //freeze use krne pr hm value ko change nhi kr payenge(passing value : object name)

JsUser1.email = "arun@chatgpt.com"   //ab email nhi change ho skta kyuki upr phle freeze kr diya hai
console.log(JsUser1);
//********/ ans*************
// {
//   name: 'arun',
//   age: 21,
//   location: 'lucknow',
//   email: 'arun@microsoft.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'tuesday' ],
//   [Symbol(key7)]: 'key7'     //ye smbol ki trh aa rha hai waise normal bhi hm access kr skte hai without bracket(Now its type : SYMBOL)
// }


// ADD FUNCTION IN OUR OBJECT

JsUser1.greeting = function(){
    console.log("Hello js user");
}

JsUser1.greeting2 = function() {
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser1.greeting());     //undefined
console.log(JsUser1.greeting2());    //Hello js user, Hitesh


// ****************//Lec-17\\ ************************//

// singleton object
const tinderUser = new Object()      //another way to declare object
console.log(tinderUser);   //empty object({})    IT IS A NON SINGLETON OBJECT..

// assign values
tinderUser.id = "123abc"
tinderUser.name = "paglu"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);   //Ans willl be : { id: '123abc', name: 'paglu', isLoggedIn: false }

// non singleton object
const tinderUser2 = {};   //also empty{}


const regularUser = {
    email : "someone@email.com",
    fullname : {                         //we can also an objects inside object.
        userfullname : {
            firstname : "arun",
            lastname : "kumar"
            
        }
    }
}

// objects se hm aisi different values access kr skte hai////////////////
console.log(regularUser.fullname.userfullname); 
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj7 = {5 : "a" , 6 : "b"}

const obj3  = {obj1 , obj2}    //just combine them like a array
console.log(obj3);   // (not a good method) ans : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// good method is----
const obj4 =  Object.assign(obj1,obj2)    //hold its result in another objects   
console.log(obj4)    //ans: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj5 =  Object.assign({},obj1,obj2) //we can also use this (same hi h bs)   "{} is an optimal parameter it acts like target and remaining part will act like source"
// assign ke through app apne objects ko assign kr skte hai..it is a good method..
console.log(obj5)  


// 90% use this method....
const obj6 = {...obj1, ...obj2}  //by using spread operator 
console.log(obj6)

const users = [      //when values came from database
    {
        id : 1,
        email : "arun@google.com"
    },
    {
        id : 1,
        email : "arun@google.com"
    },
    {
        id : 1,
        email : "arun@google.com"
    },
]

//how to print it...
console.log(users[1].email);
// (users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));   //it means ki "tinderuser objects ki sari keys return kro"  [ARRAY FORM ME]   ANS: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //[ '123abc', 'paglu', false ]   same aise hi values bhi nikaal skte hai
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'paglu' ], [ 'isLoggedIn', false ] ]

// agr muhje object me koi key/property check krna hoo hai ki nhii
console.log(tinderUser.hasOwnProperty("isLoggedIn"));   //then it returns true


//*****************************LEC-18 ************************/
// API's....we are going to learn about de-structuring

const course = {                //declare object
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "arun"
}

// use or print
console.log(course.courseInstructor);   //esse keval ek value aayegi soo bhut likhna pdega sari values ko print krne ke liye agr bhut si values hui toh
// then a new method came [by destructuring krke]
const {courseInstructor} = course    //SYNTAX: const {jo value fetch krni haii} = object name (jisme value hai sb)
const {courseInstructor : instructor} = course  //ab hm courseinstructor ko instructor bolenge......but value same ayegi.....now check by printing console.log(instuctor)
console.log(instructor);   //print that value           



// it has not any name like above objects so it behaves like "JSON"..In this both key and values are in string format
//   it is form of json like object with no name
// {
//     "name" : "arun",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// sometimes we got api in array format like,  (array of mutiple objects)
[
    {},
    {},
    {}
]














