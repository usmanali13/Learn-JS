//object singleton or declare with constructor

//this is singalton
const tinderUser = new Object();
console.log(tinderUser);
//or 
//this is non-singalton object
const tinderUser2 = {}
console.log(tinderUser2);
//these give same output {} empty object

tinderUser2.id =  "1233abc"
tinderUser2.name = "usman"
tinderUser2.isLogedin = false
console.log(tinderUser2);

//nested objects
const regularUser = {
    email: "usman@gmail.com",
    fullname : {
        userfullname: {
            firstname: "usman",
            lastname:"ali"
        }

    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

//merge objects
const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}

const obj3 = {obj1 , obj2} //same array wli problem object k ander 2 objects
console.log(obj3);
//solutin to combine objects
const obj4 = Object.assign(obj1, obj2)
console.log(obj4);
//another syntax
const obj5 = Object.assign({}, obj1, obj2) //sometime add empty paranthesis , it is an optional parameter that gurantee the objects are combine
//{} are target and others obj1 , bj2 ,or obj3 are sources 
console.log(obj5);

//mostly use this syntax using spread,easy and simple
const obj6 = {...obj1 , ...obj2}
console.log(obj6);

//when values come from database
//array of objects
const users = [
    {

        id: 1,
        email: "abc.com"
    },
    {
        id: 1,
        email: "abc.com"
    },
    {
        id: 1,
        email: "abc.com"
    }
]
//then loopthrough are print value
 users[1].email

 //methods
 console.log(tinderUser2);
console.log(Object.keys(tinderUser2)); //output value datatype is array. 

console.log(Object.values(tinderUser2)); 

console.log(Object.entries(tinderUser2)); 

console.log(tinderUser2.hasOwnProperty('isLoggedIn')); //check the value exist or not give true or false

