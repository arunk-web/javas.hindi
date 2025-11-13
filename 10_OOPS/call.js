// call and this in js  (call bind appply)

function setUsername(username){     //like hm koi application (discord) bna rhe hai tohh uska username set kr rhe hai toh uska code aisa hova
    //complex DB calls
    this.username = username;
}

function createUser(username,email,password){
    setUsername.call (this,username)        //bina call ke hmne sirf usks referrence diya hai usko call ni kiya hai jiske liye call use krna hai hme

    this.email = email;
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai)    //aise normally email password set ho jaynge