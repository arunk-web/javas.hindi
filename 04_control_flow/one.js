//if  ***************************************lec-26**********************
//in this lecture we will try to control the code according to the situation
const isuser = true;
 // if else condition phle ki trh hi honge 
if(2 === "2"){    //agr no. ke saath saath hme data type bhi same chahiye toh use triple equal
    console.log("executed");    //ans: executed
}
else {
    /////////////////
}

//agr triple equal ke liye === use krnege toh no answer coz one is integer and another one is string 

const score = 200

if(score  > 100){   //yha const use use kiya gya hai   (here we can also use let in place of const)
    const power = "fly"
    console.log(`user power : ${power}`);
}

console.log(`user power : ${power}`);    //const block scoped hai means block ke bhr nhi access ho skta hai

//if we use var in place of const 

if(score  > 100){   
    var power = "fly"   //here we use var(function scopes variable)
    console.log(`user power : ${power}`);
}

console.log(`user power : ${power}`);   //var block ke bhar bhi access ho rha hai but agr var kisi function me hota hai or
//use bhar access krte toh nhi hota coz var function scoped hai na ki block scoped

// var = function-scoped (ya global-scoped if function ke bahar ho).
// let & const = block-scoped (modern JS me recommend kiya jata hai).


const balance = 1000

if(balance > 500){
    console.log("test")
}
else if(balance < 750){
    console.log("less than 750");
    
} else if(balance < 900){
    console.log("less than 900");
}
else {
    console.log("less than 1200");
    
}


const userloggedIn = true
const debitcard = true;

if(userloggedIn && debitcard){
    console.log("allow to buy course"); 
}

// yha kuch or likhna hai abhi]]





// switch case use
const month = 1;   //agr yha pe month name hota toh month name se match krte in place of 1 or 2....

switch (month){
    case 1 : 
        console.log("january");
        break;
    case 2 : 
        console.log("febuary");
        break;
    case 3 : 
        console.log("march");
        break;
    case 4 : 
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}

//truthy and falsy values

const useremail = "arunk02615@gmail.com"   //agr empty string nhi hogi toh always true condion hogi wo

if(useremail){
    console.log("got user email");
    
} else {
    console.log("don't have user email");
    
}


//FALSY VALUE
//false,0,-0,BigInt 0n,"",null,undefined,NaN  //eske alawa sare truthy values hai

//truthy value
//"0",'false'(they are inside "")," "(space hai),[],{},function(){}(empty function),

//check array empty or not?

if(useremail.length == 0){              //const useremail = "arunk02615@gmail.com"
    console.log("array is empty");       

} else {
        console.log("not empty");
}

//object ko check krna 
const emptyobject = {     //extract the length of keys
    // 'arun' : "two"
}

if(Object.keys(emptyobject).length === 0){
    console.log("object is empty");
} else {
    console.log("not empty");
}

//**********remember */
// false == 0 true
// false == '' true
// 0 == '' true

//Nullish coalescing operator (??) : null undefined   (BETWEEN TWO)

let val1;
val1 = 5 ?? 10   //first value jo milegi wo assign ho jayegii
console.log(val1);    //ans : 5

val1 = null ?? 10       //null ke baad phli value 10 hai,here it means agr koi 3rd party null return krti hai toh hm wo nhi lena chahte toh usko rewrite kr do
console.log(val1);    //ans : 10

val1 = undefined ?? 15   //phli value 15 haiiii
console.log(val1);     //ans : 15

//terniary operator
// condition ?  true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;













