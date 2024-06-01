// operations

let value = 3
let negValue = -value
console.log(negValue)

//basic math operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3); //use in cryptography and algorithms

//string conacatenation

let str1 = "usman"
let str2 = " ali"

let str3 = str1 + str2
console.log(str3)

//complex outputs (read in documentation for detail ToPrimtive rule)
console.log("1" + 2);
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
//use paranthesis to avoid these issues
console.log((4+2) * 5 % 3);


//Tricky conversions
console.log(true); //output is true
console.log(+true); //output is 1
console.log(true); //indicate error if + write after true
console.log(+""); //output is 0


let  num1 ,  num2, num3
num1 = num2 = num3 = 2 + 2

//read from documentation mdm Increment(++)
let gameCounter = 100
gameCounter++; //postfix
console.log(gameCounter); //output is 101

++gameCounter; //prefix
console.log(gameCounter); //output is 101