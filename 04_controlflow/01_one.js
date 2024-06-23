//video 26 Control Flow or logic flow

//comparison operators < , > , <= , >= , == , != , === (also check datatype) ,
// !== (strick check or anti pattern check or negativ sign check)


//1. If statement

const isUserLoggedIn = true
const temperature = 42

if (isUserLoggedIn) {
    
}

//2. if-else

if (temperature < 50) {
    console.log("less  than 50");
}else {
    console.log("temperature is greater than 50");
}

//another example
const score = 200

if(score  > 100) { //scope start
    const power = "fly"
    console.log(`User power : ${power}`);
} // scope end
//console.log(`User power : ${power}`);     //this is out of scope


//short hand notation
const balance = 1000
if (balance > 500) console.log("tested");  //implicit scope only execute one line 
if (balance > 500) console.log("tested"), console.log("test2ed"); //for multi line without scope


//3. if-else-if

if (balance < 500) {
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");
}

//3. && AND operator

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to purchase my video.");
}

//4. || OR operator
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in.");
}

