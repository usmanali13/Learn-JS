//video 09

/*interview perspective knowledge about data types

Q) how to store data in memory and how to access data in memory?
Answer:

Two types of data types
1.primitive
    these are  call by value means when we copy , they will not give original data memory 
    refernce, on the other hand they will copy of data , and what we change , change occur
    in copied data not original memory.

    7 types:-
        String, Number, Boolean, Null(means empty not zero), undefined, 
        Symbol(use to craete unique value), Bigint

2.non primitive or refernce types
    means directly allocate memory reference 
    Types:
        Arrays, Objects, Functions

Q) JS is dynamic type language or static type language?

    Dynamically-typed languages are those (like JavaScript) where the
    interpreter assigns variables a type at runtime based on the variable's
    value at the time.
*/

//Primtive
const score = 100
const scoreValue = 100.3

const isLoggedI = false
const outsideTemp = null
let userEmail; //means vallue is undefine
//symbols
const id = Symbol('123')
const anotherId = Symbol('123')
//to check symbol work
console.log(id == anotherId); //values are same but because of symbol it give fals
//BigInt
const bigNumber = 536345672n  //converrt into bigint to store long no


//basic non primtives

//array
const heros = ["usman","ali","rehan"];  

//objects
let myObj = {
    name: "usman",
    age: "21"
}

//function
//function(){ }  => this is function definition
const myFunction = function(){
console.log("hello world");  //function declaretion
}

//to check any datatype

console.log(typeof bigNumber); //give unndefined
console.log(typeof outsideTemp); //give object
console.log(typeof score); // Number

//for interview check all these data types and learn which will answer with typeof 
//for example score give number , outsideTemp give output is object etc.

console.log(typeof myFunction); //output  is function which will function object
        //primitive give  only object