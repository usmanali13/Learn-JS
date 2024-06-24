//vidoe 29

//for of and for in loops etc , these are array specific loops

// in array they have string  and objects
// ["", "" , ""]
// [{},{}, {}]


//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

//outpu 1
2
3
4
5

//another example of for of
const greetings = "hello world"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
/* output is 
Each char is h
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d */

//Maps
//map is object that hold key value pairs , it has unique values

const map = new Map()
map.set('Pak',"Pakistan")
map.set('IN',"India")
map.set('USA',"Unired States of America")

console.log(map);
/* output is 
Map(3) {
  'Pak' => 'Pakistan',
  'IN' => 'India',
  'USA' => 'Unired States of America'
} */

//apply loop on map
//for (const key of map) { or

for (const [key, value] of map) {
    console.log(key , ':-' , value);
}
/* output is
Pak :- Pakistan
IN :- India
USA :- Unired States of America
*/

//apply for of on object

const myobj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
}

for (const [key, value] of myobj) {
    console.log(key , ':-' , value);
}

//myobj is not iteratable.