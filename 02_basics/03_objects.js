//video 16
/*
objects:-
two methods to declare objects:-

1. like literals 
when declare with literals , singleton is not created.

2. like constructor 
//singleton is created

*/
//Object.create (object created through constructor )

//object literals (a method to declare object)

const mySym = Symbol("key1") //declare symbol
//to create object


const Jsuser = {
    name: "usman",
    "fullname": "usman ali", //this value cannot access with dot use second method to access this value
    age: 18,
    location: "lahore",
    email: "abc.gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1",
} 
console.log(Jsuser);
//to acces object with dot
console.log(Jsuser.email);
//second method to access value
console.log(Jsuser["email"]);
console.log(Jsuser["fullname"]); //access like string

//question : create symbol ,and add into object key and then print?
const mySym2 = Symbol("key1")
const Jsuser2 = {
    mySym2: "myKey1", //this can be used but not like symbol because it is not correct syntax
    //to use like symbol write with square brackets
    [mySym2]: "myKey1",  //correct syntax
} 
console.log(Jsuser2.mySym2);
console.log(Jsuser2[mySym2]);
console.log(Jsuser2);

//change values 
Jsuser.email = "usman.chatgpt.com" //to overwrite values

//lock the values no one can change values , freez this
Object.freeze(Jsuser)

//add function in object
Jsuser2.greeting = function(){
    console.log("hello js user ");
}
console.log(Jsuser2.greeting());

//to name reference
Jsuser2.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`); //use this 
}
console.log(Jsuser2.greetingTwo());