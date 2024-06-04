//video 14

//Arrays
//declare aray
const myArray = [1,2,3,4,5, true , "usman"]  //square brackets with in elements or strings or numbers
/*
js array are resizable means can be change every time you want
mics of data types
array elements can not be accessd using arbitary strings
*/
console.log(myArray[0]); //indexing strat with 0
/*interview question
when we apply copy operation in js it create shallow copy 
shallow copy is a copy whose properties share the same reference 
deep copies do not share the same reference
*/
//array declare 02
const myheors = ["usman", "ali"]
//array declare 03
const myArray2 = new Array(1,2,3,4)
console.log(myArray2[1]);
//property .length to check the length
//array methods
myArray.push(8) //push value
console.log(myArray2);

myArray.pop() //remove last value
console.log(myArray2);

myArray2.unshift(9) //insert 9 in start but all other values shift to others , not recommended
console.log(myArray2);

myArray.shift() //remove 9 value
console.log(myArray2);

console.log(myArray2.includes(9)); //ask question 9 is exist or not , answer in true or false
console.log(myArray2);

console.log(myArray2.indexOf(9));//to check the index
console.log(myArray2);

const newArr = myArray2.join()
console.log(newArr); //join change the type of array convert into string
console.log(myArray2);

//slice , splice
//question diff between slice and splice
console.log("A " , myArray2);

const myn1 = myArray2.slice(1, 3) //return section of an array //last range not include
console.log(myn1);
console.log("B ", myArray2);

const myn2 = myArray2.splice(1, 3) //return section of an array //last range include  and values are remove from array
console.log("C ", myArray2);
console.log(myn2);