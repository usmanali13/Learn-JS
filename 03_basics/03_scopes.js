//video 21 "global and local scope"
//scope {}
//global scope
var c = 3000  //that's problem because var c also initialize in function
let a = 123

//block scope in curly brackets
if (true) {
    let a = 102
    const b = 394
    var c = 20 
    //or
    //c = 20
    console.log("inner a" , a); //output is "inner a 102"
}

console.log(a);  //123 output
//console.log(b);  //b is not defined
console.log(c);  //but c print 20 that's problem

//interview question
//code environment and browser console both have diff global scope.



//video 22 nested scope and clousers

function one() {
    const userName = "usman"

    function two() {
        const website = "youtube"
        console.log(userName); //check can i access username or not //yes it can access
    }

    console.log(website); //check can i access website or not //No it can't access it show error

    two()
}

one() //output is usman

//another example

if (true) {
    const userName = "usman"
    if (userName === "usman") {
        const website = " youtube"
        console.log(userName + website);  //it can correctly execute.
    }
    console.log(website); //it makes error because out of scope
}
console.log(userName); //it makes error because out of scope




//*****************************intersting******************** */

addone(5) ///addone function access before function 
// a basic function
function addone(num) {
    return num + 1
}
addone(5)



addtwo(5) ///addtwo function is not access before function  it show error
// a expression in which a variable hold function
const addtwo = function (num) {
    return num + 2
}
addtwo(5)