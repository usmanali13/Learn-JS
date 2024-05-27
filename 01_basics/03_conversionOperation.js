let score = 33
//to check the data type 
console.log(typeof score);
//or
console.log(typeof (score));

//conversion
let runs = "40" //this is string
console.log(typeof (runs)); //check the data type
//datatype first letter is capital
let valueInRuns = Number(runs) //convert string into Number
console.log(typeof (valueInRuns)); // again chech the type
//this can convert string 40 into number 


//but if value is 40abc3
console.log("NAN Not a number")

let run = "40abc3"
let valueInRun = Number(runs)
console.log(typeof (valueInRun));
console.log(valueInRun)   //this can return NAN or only 40

//but if value is null
let age = null
let valueInAge = Number(age)
console.log(typeof (valueInAge));
console.log(valueInAge) //this can return 0

//but if value is undefined
let age2 = undefined
let valueInAge2 = Number(age2)
console.log(typeof (valueInAge2));
console.log(valueInAge2) //this can return NAN

//but if value is boolean
let age3 = true
let valueInAge3 = Number(age3)
console.log(typeof (valueInAge3));
console.log(valueInAge3) //this can return 1 if false return 0

//but if value is string
let age4 = "usman"
let valueInAge4 = Number(age4)
console.log(typeof (valueInAge4));
console.log(valueInAge4) //this can return NAN


//notes
//"33" => 33
// "33abc" => NaN
// true => 1; false => zero

//convert 1 into boolen true
let loggedIn = 1
let booleanLoggedIn = Boolean(loggedIn)
console.log(typeof (booleanLoggedIn));
console.log(booleanLoggedIn) //this can return true

//convert "" empty into boolen true
let loggedIn2 = ""
let booleanLoggedIn2 = Boolean(loggedIn2)
console.log(typeof (booleanLoggedIn2));
console.log(booleanLoggedIn2) //this can return false

//convert any name  into boolen true
let loggedIn3 = "usman"
let booleanLoggedIn3 = Boolean(loggedIn3)
console.log(typeof (booleanLoggedIn3));
console.log(booleanLoggedIn3) //this can return true

// 1=> true
// 0 =>  false
//"" => false
// "usman" =>  true

//convert number into string
let somenumber = 22
let stringnumber =  String(somenumber)
console.log(typeof (somenumberS));
console.log(stringnumber) //this can return 22
