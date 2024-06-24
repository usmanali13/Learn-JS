//video 29 continue 

//for each loop

const coding = ["js", "ruby","java", "c++"]

/*
for each syntax say give call back function
function name() {} , call back function has no name so  => function () {}
and function run in array so it get value as parameters => function (value) {}
*/

//this is basic function

coding.forEach( function (value) {
    console.log(value);
} )

//arrow function with call back function

coding.forEach( (value) => {
    console.log(value);
} )


//suppose we have function
function printme(item){ //item is the parameter
    console.log(item);
}
//can i pass on this function let's see

coding.forEach(printme) //give refernce not execute.


//
coding.forEach( (item , index , arr) => {
    console.log(item , index, arr);
} )


//array common scanario
const myCoding = [
    {
        languageNae : "JD",
        languageFileName: "js"
    },
    {
        languageNae : "java",
        languageFileName: "java"
    },
    {
        languageNae : "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageFileName);
} )

//to access value from object like languagenames etc.