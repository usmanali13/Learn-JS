//video 19

//function definition
function saymyName() {
    console.log("U");
    console.log("S");
    console.log("M");
    console.log("A");
    console.log("N");
     
}
//function execution
saymyName()
//this is only function refernce
//saymyName

//function to add two numbers
function addNumbers(num1 , num2) { //num1 and num2 are parameters
    console.log(num1 + num2);
}

addNumbers(2, 5) //output us 7   //2 and 5 are argumuments
addNumbers(2, "5") //output us 25
addNumbers(2, "a") //output us 2a
addNumbers(2, null) //output us 2

//in JS a function store in variable
const result = addNumbers(2, 5)
console.log("Resulte:", result); //but the value in result is undefined so


function addNumbers(num1 , num2) { //num1 and num2 are parameters
    let result = num1 + num2
    return result
    console.log("usman"); //thsi makes an error because after return no one command will execute 
}
const result2 = addNumbers(2, 5)
console.log("Resulte:", result2); 

//another way
function addNumbers(num1 , num2) { 
    return num1 + num2
    }
    const result3 = addNumbers(2, 5)
    console.log("Resulte:", result3); 



function loginUserMeseage(username) //default value (username = "abcxyz")
{
    if (username === undefined) //or (!username)
     {
        console.log("please enter username.");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMeseage("usman")) //usman just logged in ouput

console.log(loginUserMeseage("")) //just logged in ouput

//interview question if no value will pass what will output
console.log(loginUserMeseage())  //output is undefined we use if condion to check