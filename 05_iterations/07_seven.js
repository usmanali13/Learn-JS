//video 30

const myNumers = [1,2,3,4,5,6,7,8,9,10]

//add 10 to every number
//use map , it also a callback function

const newNums = myNumers.map( (num) => num+10 )  //it automatically return values without scope{}
console.log(newNums);
/* output
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
  */


//chaining method

const newNumbers = myNumers
                    .map( (num) => num*10 )
                    .map( (num) => num+1)
                    .filter( (num) => num>=40)  //in filter true and false game
console.log(newNumbers);
/* first two map output
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
  */

/* first two map and filter output
[
  41, 51,  61, 71,
  81, 91, 101
]
  */

