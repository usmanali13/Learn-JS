//video 30

//reduce method used in shopping cart  to add total bill

const myNums = [1,2,3]

const myTotal = myNums.reduce(function(accumelator , currentvalue) {

    console.log(`accumelator value ${accumelator} and current value is ${currentvalue}`);

    return accumelator+ currentvalue

}, 0) //after  qomma ,  0 is accumelator value

console.log(myTotal);

/* output
accumelator value 0 and current value is 1
accumelator value 1 and current value is 2
accumelator value 3 and current value is 3
6
*/

//now reduce write in arrow function

const myNums2 = [1,2,3]

const myTotal2 = myNums2.reduce( (acc, curr) => acc+curr , 0)

console.log(myTotal);


//another example

const shoppingcart = [
    {
        itemname: "js course",
        price: 3200
    },
    {
        itemname: "c++ course",
        price: 500
    },
    {
        itemname: "Andriod course",
        price: 5999
    },
]

//q. shopping cart prices add?

const priceTopay = shoppingcart.reduce((acc, item) => acc+  item.price , 0)

console.log(priceTopay);  //output is 9699.