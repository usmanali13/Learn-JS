//truthy and falsy

const userEmail = "usman@gmail.com" //assume string has true value
                                    //if it is empty string it is false

if (userEmail) {
    console.log("got user email");
    
} else {
    console.log("don't have user email");
}


// falsy values => false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//truthy values => truth , 1 , "0" , "usman" , 'false'  , " " ,[] , {} , function(){}



//to check the array empty or not

const user = {}

if (user.length === 0) {
    console.log("array is empty."); //true
}

//to check empty object

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}


//questions 
false == 0 //true
false == "" //true
0 == '' //true

//Nullish Coalesing Operator (??) : null undefined

let val1;
val1 = 2 ?? 4   //value assign is 2
console.log(val1);

val1 = null ?? 10 //value assign is 10

val1 = undefined ?? 20 //value assign is 15

val1 = null ?? 10 ?? 15 //value assign is 10



//ternory operator
//condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80")