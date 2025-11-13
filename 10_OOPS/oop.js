// object literals

const user = {
    username: "hitesh",
    logincount: 8,
    signedIn : true ,

    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this)
    }

}

// console.log(user.username)       //ANS: hitesh
// console.log(user.getUserDetails())   
//ANS:
// Got user details from database
// username: hitesh
// {
//   username: 'hitesh',
//   logincount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }

function User(username,loginCount,isLoggedIn){
    this.username = username      //this.username is variable and otherone is what is paas
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    //return this    nhi likhne pr bhi koi problem nii hh   
}


const userOne =  new User("hitesh",12,true)
const userTwo =  new User("chaiorcode",11,false)

console.log(userOne)
console.log(userTwo)    //ye passing value sbme store ho jayengii
//agr bina new keyword ke likhte hai tohh overwrite kr degaa soo that's the importance of new keyword
//agr new keyword use kre toh koi dikkat ni hogi

//ans:
// User { username: 'hitesh', loginCount: 12, isLoggedIn: true }
// User { username: 'chaiorcode', loginCount: 11, isLoggedIn: false }



