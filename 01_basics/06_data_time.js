// dates
///its a little confusing and complex topic you need to read again.....//
let myDate = new Date()  //new object

console.log(myDate.toString());   //Ans : Wed Aug 06 2025 10:26:01 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Ans: Wed Aug 06 2025
console.log(myDate.toLocaleString()); // ans: 6/8/2025, 10:26:01 am
console.log(typeof myDate);   //ans :   object


let createdDate = new Date(2023,0,23)   //23/1/2023, 12:00:00 am(toLocaleString())  (hm pass bhi kr skte hai date month year hour minute second)

console.log(createdDate.toLocaleString());   //numbers me january 0 se start hota hai

let createdDate2 = new Date(2023,0,23,5,8,35)  //ESME hour second minute pass kiya hai
console.log(createdDate2.toLocaleString());

// take input in the form of ("YYYY-MM-DD") or ("MM-DD-YYYY") => (IN INDIA)
let createdDate3 = new Date("2023-01-15")   //ans : 15/1/2023, 5:30:00 am   //string ke case me months 1 se start hote hai
console.log(createdDate3.toLocaleString());

// ++++++++++++++++++  date   ++++++++++++++++++++++++
// for designing quiz...
let mytimeStamp = Date.now()   //we can also use new keyword 

console.log(mytimeStamp);    //ans : 1754468044422(milisec abtk ki)
console.log(createdDate3.getTime());
console.log(Math.floor(Date.now()/1000));   //convert miliseconds to second (divide by 1000 and take floor value or round off)

// date se bina convert kiye usse months year hour minute nikal skte hai...
let newDate = new Date()   /// newdate ek objext hai
console.log(newDate);
console.log(newDate.getDate());  //esse aaj ki date milegi
console.log(newDate.getFullYear()); //2025


// read again this 
// ye smj nhi aaya
newDate.toLocaleString('default' , {
    weekday : "long"
})