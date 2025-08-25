// ******************************||lec-21||***************************//

let a = 10      //global scope
const b = 20
var c = 30

console.log(a);
console.log(b);   //normal
console.log(c);

if(true){
    let a = 10       //block scope
    const b = 20    //abc ko kvl es block ke andr fetch kr skte hai
    var c = 30
}

console.log(a);    //"a" ko access nhi kr skte because wo ab ek bracket me hai scope limited hai uska
console.log(b);   //same b and c
console.log(c);

// ****************************************lec-22***********************//

//NESTED SCOPE
function one(){      //let suppose as parent 
    const username = "arun"

    function two(){    //let suppose it as a child function   (child can access the variable of parent)
        const website = "youtube"
        console.log(username);
    }
    console.log(website) //esko Access nhi kr payenge
    // two()  //function call
}

// one()

if (true) {
    const username = "arun"
    if(username === "arun"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);
//++++++++++++++++++++++++++||interesting||++++++++++++++++++++++++++++++++
// two types se function se declaration....

// console.log(addone(5));   // ❌ Error: Cannot access 'addtwo' before initialization
function addone(num){
    return num+1
}
//only declaration
// console.log(addone(5));    //sirf call nhi krna print bhi krna hai



// addtwo(5)   declaration se phle access kr rha hu it causes "error"

const addtwo = function(num){       //after declaration we also store it in a variable
    return num+2
}

// function(4)
console.log(addtwo(5));

// ********************************LEC-23(arrow function)**************************
// this function(this current context banata hai)
const user = {    //es braket ke andr variable ko this se access krenge
    username : "arun",
    price : 999,

        welcomemessage : function() {
            console.log(`${this.username},welcome to website`);
            // console.log(this);
            //ans:
            /*
            arun,welcome to website
                    {
                    username: 'arun',
                    price: 999,
                    welcomemessage: [Function: welcomemessage]
                    }
                    sam,welcome to website
                    {
                    username: 'sam',
                    price: 999,
                    welcomemessage: [Function: welcomemessage]
                    }
            */
            
        }
}
//access
user.welcomemessage()   //arun,welcome to website
user.username = "sam"   //value change kr di
user.welcomemessage()   //sam,welcome to website

// console.log(this); //empty object hai

function chai(){
    let username = "hitesh"
    console.log(this.username);    //this object ke andr use kr skte hai naaa ki function ke andr 
    console.log(this);   //ans: esse hme bhut sari values milengiiii 
    
}
// chai()

//arrow function ke through kaise define kre 
const chai2 = () => {      //function name remove and add =>
    let username = "hitesh"
    console.log(this.username);   //ans : undefined
    console.log(this);  //ans: {}
}
chai2()

//arrow function syntax
// () => {}
//one way to define
const addTwo = (num1,num2) => {
    return num1+num2   //it is known as explicit return (use of return keyword)
}

console.log(addTwo(3,4));   //7
//declare arrow in "ONE LINE"

const addd = (num1,num2) => num1+num2   //this  or (num1+num2) //known as implicit return (no use of return keyword)
//it is better to use () as (num1+num2) coz object esi trh return ho skte hai see below

const addd2 = (num1,num2) => ({username : "arun"})   //it is neccessary to wrap it in ()

console.log(addd2(1,2));  //it return object as  { username: 'arun' }


//**********************************lec-24(IIFE)************************* */
//immediately invoked function expressions

(function chai(){  
    //it is an named iifi coz it has its name chai
    console.log("DB CONNECTED");      //DB CONNECTED
    
}) (); //but yha pr problem aa skti hai esliye pure function ko close kr do eske andr    ans print hoga

// chai()  //access kr skte haiii
//global scope ke pollution se problem hoti hai kayi baar bs usi pollution ko hatane ke liye iifi ka use kiya

// write same thing using arrow function
(  () => {
    console.log("DB CONNECTED 2");   //DB CONNECTED 2 
    
}) (); // (BETTER TO USE SEMICOLON) agr yha semicoln nhi lga hoga toh niche wla func run krne pr error ayega

//AGR NAME print krna hai 

(  (username) => {     //ye simple IIFI hai kyuki eska koi name nhi hai
    console.log(`DB CONNECTED 2 ${username}`);   //ans:DB CONNECTED 2 arun
    
}) ('arun');   //yha pr ye bracket function call ki trh act kr rha hai



//*****************************lec-25***********************//
// topic:  How does javascript execute code + call stack























