//video 29 continue

//apply loop on object

const myobject = {
    js: "javascript",
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

//use for in for obj

for (const key in myobject) {
   console.log(`${key} shortcut is for  ${myobject[key]}`);
}

/* out put is
js shortcut is for  javascript
cpp shortcut is for  c++
rb shortcut is for  ruby
swift shortcut is for  swift by apple
*/



//can forin loop use for array?

//let's  see

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
   console.log(programming[key]);
}
/* out put is
js
rb
py
java
*/

//can forin apply on map?
//No, map is not iteratable.

const map = new Map()
map.set('Pak',"Pakistan")
map.set('IN',"India")
map.set('USA',"Unired States of America")

for (const key in map) {
    console.log(key);
}