//video 12

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());  //now it can convert into string
//we can use string methods like length etc
console.log(balance.toString().length);


console.log(balance.toFixed(2));//use in ecommerece website that place only 
//two zeros after point like 100.00

///precision
const anotherNumber = 23.8966
console.log(anotherNumber.toPrecision(3)); //output is 23.9

const anotherNumber2 = 123.8966 //if value is 123
console.log(anotherNumber2.toPrecision(3)); //output is 124 it can round off after 1-21

const anotherNumber3 = 1123.8966
console.log(anotherNumber3.toPrecision(3)); //output is 1.12e+3 
//or
console.log(anotherNumber3.toPrecision(4)); //output is 1124

//
const hundreds = 1000000
console.log(hundreds.toLocaleString()); //output is 1,000,000
//or
console.log(hundreds.toLocaleString('en-IN')); //oindian standards

//in console write Numbers.abc like max or min value etc


//*****************Maths *********************

//Maths library
console.log(Math); //math is object where multiple methods write in console to see all methods

console.log(Math.abs(-4)); //absolute value minus value convert into positive

console.log(Math.round(4.3)); //to round off

console.log(Math.ceil(4.2)); //round but output is 5 because ceil use to choose only high value

console.log(Math.floor(4.9)); //round but output is 4 because floor use to choose only lowest value

console.log(Math.min(4,3,5,6,2));

console.log(Math.max(4,3,5,6,2));

//important where math library use
console.log(Math.random()); //math.random always give random value between o and 1
//for range
console.log((Math.random()*10) + 1);
//to floor to round off
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
//generic syntax formula to generate random value
//important line
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


