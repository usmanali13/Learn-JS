//video 18
//discussion on aobjects and API
//more functions of objects

//destructuring of objects
const course = {
    courseName : "JSIN Urdu",
    price: "999",
    courseInstructor: "usman"
}
//course.courseInstructor  //to access values a simple way
//another goood method with destructring
const {courseInstructor} = course
console.log(courseInstructor);
//or
const {courseInstructor : Instructor} = course
console.log(Instructor);

//a react small concept because destructring mostly use in react
// const navbar = ({company}) => {

// }
// navbar(company = "usman")

//API Concepts
//values come from in the form of JSON
//jSON also be object
// {
//     //name:  "usman", //in proper json structure key will also be string and value also be string
//     "name": "usman",
//    " price" : "free"
// }
//https://api.github.com/users/hiteshchoudhary   //to see how api response

//sometime we get api in the form of arrays
[
    {},
    {},
    {}
]

//search on google "randomuser me api" 
//we can copy an sample api respose
//tools to study this api result 
//search and go to "JSON format"
//then click on format and beautify