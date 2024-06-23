//video 24
//immediatly invoked function expression (IIFY)
//we need a function is write and this can be immediatly execute 
//this can use in database connection 

//to avoid gloabl scope pollution use ify

(function chai(){ //this is named iife because it has name chai
    console.log('DB connected');
})(); //use semicolon to stop 
//first paranthesis () for function defintion and second () for execution
//two iify ko 1 sath likhny k liy semicolon use
//arrow function
( () => { //this is unnamed iife because it has no name chai
    console.log('db conneted too');
})();

//arrow function to pass parameter in iify
( (name) => {
    console.log(`db conneted too ${name}`);
})("usman");