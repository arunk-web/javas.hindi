//promise creation     [METHOD 1]

const promiseOne = new Promise(function(resolve,reject){     //here promise is holds in a variable called promiseone
    //do an async task
    //db calls,cryptography,newtwork
    setTimeout(function(){
        console.log('Async task is complete');   //1 sec ke baad ye print hoga
        resolve();   //esse promise consumed hoga[yha se niche value paas ho rhi hai]
    },1000)  
})

//promise consumption
// promiseOne.then(function(){
//     console.log("Promise consumed");
// }) 
//now run
// Async task is complete
// Promise consumed


//      [METHOD 2]  "all in one" *********************************************
// new Promise(function(resolve,reject){         //promise creation
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
//  }).then(function(){                          //promise consumption
//     console.log("Async 2 reolved");
    
// })


// ans is : 
// Async task is complete
// Promise consumed
// Async task 2
// Async 2 reolved
//******************************************************************************

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai",email : "chai@example.com"})   //object pass or array or any function
    })
    
},1000)

// promiseThree.then(function(user){     //uper wale se connection bn gyaa
//     console.log(user);      //let object be an user [resolve ke andr jo parameter paas kroge wo mil jayega yha]
// })
    
//*************************************************************************************************************************************** */
// const promiseFour = new Promise(function(){
//     setTimeout(function(){
//         let error = true;
//         if(!error) {
//             resolve({username : "hitesh" , password : "123"})
//         } else {
//             reject('ERROR : Something went wrong')
//         }
//     }, 1000)
// })


//now how to consume this value
// promiseFour.then((user) => {        //.(dot) use krke consume kr rhe [first way]
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("the promise is either resolved or rejected"));      //ye always execute krega

//******************************************************************************************* */

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true

        if(!error){
            resolve({username : "javascript", password : "123"})
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})

//by using async try catch block  

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);

    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive();


  




