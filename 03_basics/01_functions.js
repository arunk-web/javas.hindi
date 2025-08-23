
console.log("A") //agr name 5 baar print krna pde toh ese baar baar likhna pdega toh 
                  //  just close it in a function and just call that function 5 times
console.log("R")
console.log("U")
console.log("N")

function saymyName(){     //SYNTAX: function(keyword) name(){
                                            // function defination                                    //}
    console.log("A")
    console.log("R")   
    console.log("U")
    console.log("N")
}

saymyName()     //call it  reference()
// saymyName()
// saymyName()

//add two number
function addTwoNumbers(number1,number2){     //jaise normal function likhte hai(in bracket these are parameters)
    console.log(number1+number2);
    
}

addTwoNumbers(3,5)     //in case of 3,"4"(these are arguments) [ans: 34] that's why checking is *important*
const result = addTwoNumbers(4,9)
// console.log("result : ", result);  //ANS : result :  undefined  sooo let's sort it down

function addTwoNumbers(number1,number2){     
    let result = number1+number2;
    return result      // in just one line (return number1+number2)
}

console.log("result : ", result);   //result :  13

function loginUserMessage(username){
    if(username === undefined){     //same as "!username"
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("arun ji"));   //agr koi value esme pass nhi krnege toh undefined ayega soo for this we can also add a check condintion
console.log(loginUserMessage());

//for shopping card
function calculatecartprice(...num1){  //rest or spread operator(here it is rest)
    return num1
}

console.log(calculatecartprice(200,400,500,2000));    //ans: [ 200, 400, 500, 2000 ]

//another one 
function calculateprice(val1,val2,...num1){     //starting ki do value en variables me chli jaynegi
    return num1
}

console.log(calculateprice(200,400,500,2000));    //ans:[ 500, 2000 ]



// ******************************||LEC-20||*********************************//

//how to pass object in function
const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){   //hm yha pr "user" nhi pass krenge  koi bhi object aisa likhenge
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//kaise pass krenge
handleObject({
    username : "sam",      //username is sam and price is 399
    price : 399
})

//how to pass array
const mynewArr = [100,200,300] 

function returnSecondValue(getArray){   //koi bhi array ho skta hai esliye aise parameter likho
    return getArray[1]  
                       //esme ye pass kro "1st" value return krni hai second value pass krni hai aise
}

console.log(returnSecondValue(mynewArr));
console.log(returnSecondValue([1000,2000,3000,4000]));   //aise array bnao ya phir aise pass kr do array bnake










