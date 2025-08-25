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
        }
}
//access
user.welcomemessage()   //arun,welcome to website
user.username = "sam"   //value change kr di
user.welcomemessage()   //sam,welcome to website













































