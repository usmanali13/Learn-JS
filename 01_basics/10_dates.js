//video 13
/* 
Dates in js
default date time  standard is January 1, 1970
dates can be calculated and compare with miliseconds
TC39 is temporal API use in advanced
*/

let myDate = new Date()
console.log(myDate);
//now date convert in to string
console.log(myDate.toString()); //output is "Tue Jun 04 2024 10:19:02 GMT+0000 (Coordinated Universal Time)"
//more methods
console.log(myDate.toDateString()); //output is "Tue Jun 04 2024"

console.log(myDate.toISOString()); //output is "2024-06-04T10:21:23.239Z"

console.log(myDate.toJSON()); //output is "2024-06-04T10:21:23.239Z"

console.log(myDate.toLocaleDateString()); //output is "6/4/2024"

console.log(myDate.toLocaleString());  //output is "6/4/2024, 10:21:23 AM"

//imp type of date ?
console.log(typeof myDate);  //date is a object

//declare date method 2
let myCreatedDate = new Date(2024, 0 , 23)  //month started with 0 in js
console.log(myCreatedDate.toDateString()); //output is "Tue Jan 23 2024"

//method 3
let myCreatedDate2 = new Date(2024, 0 , 23 , 5, 3) 
console.log(myCreatedDate2.toLocaleString());  //output "1/23/2024, 5:03:00 AM"

//another format 
let myCreatedDate3 = new Date("2024-01-03")   //month start with 01 jan , YYYY-MM-DD
console.log(myCreatedDate3.toLocaleString());   //ouput is "1/3/2024, 12:00:00 AM"

//Time Stamps
let myTimeStamp = Date.now()
console.log(myTimeStamp);
//to compare two dates
console.log(myCreatedDate.getTime());//both outputs in miliseconds so now we compare dates

//convert into seconds
console.log(Math.floor(Date.now()/1000));

//more methods
let newDate = new Date()
console.log(newDate);
//if we know only single thing like  only month, or only date
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//string interpolation
`${newDate.getDate()} and the day is ${newDate.getDay}`

//more customize using localstring
newDate.toLocaleString('default',{
    //press ctrl + space to get properties
    weekday: "long"
})