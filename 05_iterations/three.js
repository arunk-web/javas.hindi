// reduce keyworddd
const array = [1,2,3,4]

// const initialvalue = 0;   //syntax
// const sumwithinitial = array.reduce(
//     (accumulator(initially 0),currentValue) = accumulator + currentValue,(ye sum ki value accumulator me paas hogii)
//     initialvalue
// )

console.log(sumwithinitial);


const total = array.reduce(function( acc,currval){    //in short form
    console.log(`acc : ${acc} and currval : ${currval}`);
    
    return acc + currval
},0)  //value after comma, is the initial value of comma.....

// console.log(total);
//ans:  acc : 0 and currval : 1
// acc : 1 and currval : 2
// acc : 3 and currval : 3
// acc : 6 and currval : 4
// 10



//write in arrow function
const mytotal = array.reduce( (acc, curr) => acc+curr, 0) 
//same answer
return mytotal;



const shoppingCart = [
    {
        itemName : 'mobile dev',
        price : 999
    },

    {
        itemName : 'cyber security course',
        price : 9999
    },

    {
        itemName : 'web dev course',
        price : 1599
    },
]


const pricetopay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(pricetopay);





