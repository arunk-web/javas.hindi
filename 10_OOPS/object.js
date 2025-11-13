
//********************DISCUSSION ON NEW KEYWORD************// */
function multiplyBy5(num){
    return num*5;
}

// multiplyBy5(5);   //normally is function ko aise access kr skte hai

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){      //es function me hm niche value pass krenge
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){    //yha pr ye confusion hai kii kiska score aage badaynege
    this.score++;    //yha chai.score++ or tea.score++ likhne ke place pe "this" likh do coz it 
                     // means jisne bhi bulaya ho uska score bdaa do
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);    //alone "score" likhne ke bjayyy this.score jisne bulaya hai uska print kr do 
    
}

//upr wale function me value pass kr rhe hh
const chai = new createUser("chai",25)     //here we use new keyword[bina new use kre run krenge toh error ayegaa]
const tea = createUser("tea",250)

chai.printMe()       //chai wo acces kr rhe 
