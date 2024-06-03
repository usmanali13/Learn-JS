//video 10

/*
=>stack  use in primitive types
when stack memory use means when we declare variable we got its copy
if we change value, the changes occur in copy value not original value


=>heap use in non-primitive types
when memory or object define in heap we got refernce of original value 
if we change value, the changes occur in original value
*/

//Example of Stack

let myName = "Usman Ali" //this is primtive that store in stack
//when we change value
let anotherName = myName
anotherName =  "uaf"

console.log(myName)  //output is Usman Ali
console.log(anotherName) //output is uaf
//we can see the copy value is changed not original value.


//Example of Heap
let userOne = {
    email : "usman@gmail.com",
    uid: "123455"
}

let userTwo = userOne  //it will give reference

userTwo.email = "ali@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); //now both value same because heap give memory reference 
//output is ali@gmail.com
//          ali@gmail.com



