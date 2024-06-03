//video 11 =>   Strings

/*
'usman' + 'ali' use + sign to concatenate strings in console
*/

const name = "usman"
const repoCount = 50
console.log(name + repoCount + "ali");  //old syntax

/* now in modern world use backticks also called string interpolation
a modern way to concatenate */
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

//two wayys to declare striings
//  1.   const name = "usman"\
//  2.
const gameName = new String ('usman-ali-com') //this can create object and allow to use 
//multiple methods are in prototypes (to use right click and go to console and write gameName)

//to access key value pair
console.log(gameName[0]); //out put is u
//to access prototype 
console.log(gameName.__proto__); //show in console not terminal write object name "gameName"

//more objects

console.log(gameName.length);
console.log(gameName.toUpperCase()); //output convert into upper case but change not occur in original string
//to check character in which position
console.log(gameName.charAt(2));
//to check position
console.log(gameName.indexOf("s"));

//go to mdn docs for string method documentation

//to get name half or full or substring
const newString = gameName.substring(0,4) //show 0 to 4 characters
console.log(newString);

//slice , in slice benefit we give negetive value then they start reverse
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//trim 
const newStringOne = "     usman   "
console.log(newStringOne);
console.log(newStringOne.trim()); //to remove spaces use trim

//replace
const url = "https://usman.com/usman%20choudarty"
console.log(url.replace('%20' , '-')); //change %20 with -

//to check usman is occur in url  or not
console.log(url.includes("usman"));  //give true

console.log(url.includes("ahamd"));  //give false

//convert string iinto array
console.log(gameName.split('-')); //this can divide on the basis of - 

//go to mdn for more information.
