//conversions

console.log(2 > 1) //answer in true or false
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1) 

//problem occur when we cannot compare same data types
console.log("2" > 1); //true 
console.log("02" > 1); //true
//note that when we compare any values sure that they have same datatype

//typescript => not allow to compare two different datatypes

//it not give predictable answers
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//*****comparison > and equality = operators work differently in js
//comparison convert null into number , treating it as 0 .
//that's why console.log(null >= 0); is true and console.log(null > 0); is false.

//same confusion in undefined
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false

//strict check , check with three equals mean not check value also check both datatypes
console.log("2" === 2); //this not convert because it have diff datatypes

//***** avoid these types of comparisons.