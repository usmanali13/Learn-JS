// video 27

//for loop 

for (let index = 0; index <= 10; index++) { //ctrl + d for multi select
    const element = index;
    if (element == 5) {
        console.log("5 is the best number.");
    }
    console.log(element);
}

//another example
for (let i = 1; i <= 10; i++) {

    console.log(`outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {

        //console.log(`inner loop value: ${j} and outer loop ${i}`);

        console.log(i + '*' + j + ' = ' + i*j); //1 to 10 table
    }
    
}


//array example

let myArray =["usman", "ali" , "rehan"]

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


//keywords
///break  and continue

for (let index = 1; index <= 20; index++) {

    if (index == 5) {

        console.log("5 is detected.");

        break
    }
    console.log(`value of index is ${index}`);
    
}

//continue

for (let index = 1; index <= 20; index++) {

    if (index == 5) {

        console.log("5 is detected.");
        
        continue
    }
    console.log(`value of index is ${index}`);
    
}