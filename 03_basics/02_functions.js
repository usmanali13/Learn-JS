//video 20
//a shopping cart app
// a situuation in which we are not know what no of arguments are come 
//like shopping cart only items can be added
function calculateCartprice(...num1){      //... rest operator to pass multiple values

    //function calculateCartprice(val1 ,  val2, ...num1){ output is [600] goes in ...num1
    return num1
}
console.log(calculateCartprice(200,400,600));

//pass object in function and how to use
//craete object
const user = {
    username :  "usman ali",
    Price : 200
}
//function and call object in function
function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
}

handleobject(user) //output is => Username is usman ali and price is 200

//pass direct object
handleobject({
    username: "samens",
    Price: 3998
}) //output is "Username is samens and price is 3998" //pass direct object

//pass arrays
const mynewarray = [200, 400, 200, 300]

function returnSecondValue(getarray) {
    return getarray[1]
}
console.log(returnSecondValue(mynewarray)); //array pass in variable //output is 400
console.log(returnSecondValue([200, 400, 200, 300])); //array dierct pass //output is 400