// ALL OPERATION RELATED TO ARRAYS TAKES PLACE HERE



// SORT
const names = ["Alice","Bob","Chandan"]

names.sort()
// phle alice ayega then bob and chandan
// sort according to their acice value
// A-65 and a-97   ascii value 

names.reverse()   //reverse kr dega (sort krke reverse krega toh - descending order)


const a = [101,90,80,32,91]
a.sort()
// ye esko ek character ki trh treat krega ascii value ke acc sort krega 
// 1-49 value hoti hai uske according sort krega (YE RULE HAI CHARACTER KE BASIS PE SORT KREGA)
// 101,32,80,90,91
// KYUKI JS me array me varaty of data daal skte hai like arr = [100,"rohit",true] toh esko character ke basis pe sort krega


// lekin agr baki language ki trh hme sort krna ho toh ek extra function

const b = [10,40,2,5,1]
b.sort((a,b) => a-b)     //ye ascending order me dega and agr b-a kr dete hai toh descending order me dega
console.log(b)
// ye function se ye normal baki language ki trh sort ho jayega
// phle a-b calculate krenge 
// agr neg value aayi toh order shii rhega and agr positive ayega tohh b phle ayega and a baad me ayegag
// -ve=  phle a ayega fr b ayega
// +ve = phle b ayega then a ayega

// 2d array

const arr = [10,30,50,[40,90,11],80]
// 3rd index pe wo pura array hoga
// arr[3][0] = 40  and so on

// 3d array
const arr2 = [10,30,50,[40,90,[60,19,99],11],80]
// usi trh esme bhi krnege

// array flating
const c = arr2.flat()
// YE bracket hta dega and value paas krni hogi jis level tk flat krna hoga and 


// in cpp hm array ke kisi value ko find kr skte hai bcoz of their contiguous pattern
// base address + index * size of data     [address pta hoga toh hm value access kr skte haii]

// in js hm ni kr skte hai aisa bcoz of not contiguos location  [in js array is an object]

const d = [10,309,"rohit",9.3,true]
d.name = "mohan"

console.log(d)
//  [10, 309, 'rohit', 9.3, true, name: 'mohan' ]


