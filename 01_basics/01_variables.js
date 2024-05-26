//var and const

const accountId = 625638 //const that value cannot be change 
//accountId = 556        //this may cause error because const value cannot be changed
console.log(accountId);

/*
two types to declare variable in js var and let
{}=>is called scope
in var scope of variable error occur
let use for scope of variable
*/

let accountEmail = "hvfhv@gmail.com"
var acountPassword = "6357648"
//these  values can be changes
accountEmail = "usman@gmail.com"
acountPassword = "12345"

//variable can be initialize without datatype in js
accountCity  = "Burewala"
//value can be changed
accountCity  = "Vehari"


//value is undefined if value not initialize
let accountState;

//to print table of values
console.table([accountId,accountEmail,acountPassword,accountCity,accountState])
console.log("hello usman")

