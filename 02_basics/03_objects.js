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
// console.log(JsUser1.name);   //(right answer,but a wrong way)
// console.log(JsUser1["name"]);   //right way (square bracket ke andr string ki trh paas kro)
// console.log(JsUser1[mySum]);   //AISE symbol ko access krte hai

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

// console.log(JsUser1.greeting());     //undefined
// console.log(JsUser1.greeting2());    //Hello js user, Hitesh


// ****************//Lec-17\\ ************************//

// singleton object
const tinderUser = new Object()      //another way to declare object
console.log(tinderUser);   //empty object({})

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

const obj3  = {obj1 , obj2}
console.log(obj3);   // (not a good method) ans : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }








