//vidoe 23 this and arrow function
//this keyword ask or refer about current context

const user = {
    username : "usman",
    price: 9999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to my website`);
        console.log(this);  //print current context
    }

}
user.welcomeMessage()
user.username = "ali" //if value is change
user.welcomeMessage()


console.log(this); //show empty {} in node environment

//interview question 
// in browser global object is ? window


//if this print in a function
function tea() {
    let username = "usman"
    console.log(this); //show very unexpected values in node
    console.log(this.username); //in function this is not used. show undefined
}
tea()


//diff betw regular and arrow function 
// arrow function we can use this and regular function this is not used.
//declare  regular functions
const code = function () {
    let username = "usman"
    console.log(this.username);
}
code() //output is undefined it will not know about this

//another example arrow function
const chai = () => {
    let username = "usman"
    console.log(this.username);  //give undefined
    console.log(this); //give empty paranthesis
}
chai()


//pure arrow function
//1.basic arrow function or explicit return
const addtwo = (num1 , num2 ) => {  //when curly braces use return keyword is write
    return num1 + num2
}

console.log(addtwo(3,5));

//2.implicit return not return keyword are use.
const addtw = (num1 , num2 ) =>  num1 + num2  //one line statement
console.log(addtw(3,5));

//or
const addt = (num1 , num2 ) =>  (num1 + num2) //when paranthesis use return keyword is not write
console.log(addt(3,5));

//if object return
// const add = (num1 , num2 ) => {  
//     username : "usman " //answer is undefined because object not return in this way
// }
const add = (num1 , num2 ) => ({  
    username : "usman " //use parathensis
})
console.log(add(3,5));