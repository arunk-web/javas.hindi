// all about objects

const user = {
    name : "arun",
    age : 22,
    email:"arunk@gmail.com",
    account: 3500,
 
    "home address" : "fatehpur"
}

//agr spacing aa jaye toh comma me likhna pdta haii


// CRUD Operation
//  value access
console.log(user.age)
console.log(user["name"]) 
// dono tarike hai value read krne ke 

// value update
user.account = 3800
console.log(user)

// delete
delete user.email
console.log(user)

// read
console.log(user["name"])


const user5 = {
    name : "ankit",
    age : 20,
    email:"ankit@gmail.com",
    account: 300,
    "home address" : "fatpur"
}

console.log(Object.keys(user5));   //it gives only keys of object
console.log(Object.values(user5));  //it gives only values of objects
console.log(Object.entries(user));   //it gives the key value pair of objects

//fetching keys using for-in loop
for(let keys in user){
    console.log(keys,user[keys]);
}
// name arun
// age 22
// account 3800
// home address fatehpur

 
// user[keys] => ye term hmko value dega and user.keys krenge toh undefined ayega kyuki user ke andr wo keys term ko dudega jo ki ni hai andr

// poor method
// const name = user5.name
// const age = user5.age

// destructuring method (good one)
const {name,age} = user5

// destructuring of array
const arr = [10,20,30,40,50,60]

const [first,second,third] = arr

console.log(first,second,third)
// 10 20 30


for(let values of Object.values(user)){
    console.log(values);
}

for(let values of Object.entries(user)){
    console.log(values);
}

// about this keyword
const user6 = {
    name : "rohit",
    emailId : "arun@gmail.com",
    amount : 1234,
    greeting: function(){
        console.log(`Strike is coming on 18 october ${this.name}`);
        return 20;
    }
}

const val = user.greeting();
console.log(val);

// nested object

const user = {
    name: "arun",
    age:20,
    amount:  100022582,
    address:{
        city :"ftp",
        state:"UP"
    }
}


