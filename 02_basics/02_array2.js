//video 15


const heros = ["thor","ironman","spider man"]
const dc_heros = ["superman","flash","ironman"]
//merge array , not good syntax
heros.push(dc_heros) //dc_heros is a single element that can push in heros array
console.log(heros); 
console.log(heros[3][1]); //dc_heros is 3rd element , and 1 element of 3

//another method to merge
const allHeros = heros.concat(dc_heros)
console.log(allHeros);

//another easy method
//spread method
const all_new_heros = [...heros, ...dc_heros] //benefit is add more value with ...
console.log(all_new_heros);

//rare case situation
const another_array = [1,2,3, [4,5,6], 7, [6,7],[4,5]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//use when data scrapping when objects are string convert into strings
console.log(Array.isArray("usman")) //ask quedtion usman is array or not
console.log(Array.from("usman")) //convert usman into array

console.log(Array.from({name: "usman"})); //interesting array when  array not find output is empty array

//
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
