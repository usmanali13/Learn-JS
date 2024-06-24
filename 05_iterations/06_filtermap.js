//video 30

const coding = ["js", "ruby","java", "c++"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item  //output is undefined for each can not retun value
} )
console.log(values);

//filter map
//filter return values but for each cannot return values
//basics

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)  //without return keyword

//or
const newNum = myNums.filter( (num) => 
    {
        return num > 4  //it has return 
    })

console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]


//if we can use for each for this same type of work

const newNm = [] 

myNums.forEach( (num) => {
    if (num>4) {
        newNm.push(num)
    }
} )
console.log(newNm);  //[ 5, 6, 7, 8, 9, 10 ]
//both foreach and filter are same you can choose as you own.




//Example of books

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  /* output is after apply filter
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  */

  userBooks = books.filter( (bk) => {return bk.publish >= 2000 } )

   /* output is after apply filter
        [
            {
                title: 'Book Five',
                genre: 'Science',
                publish: 2009,
                edition: 2014
            },
            {
                title: 'Book Eight',
                genre: 'Science',
                publish: 2011,
                edition: 2016
            }
        ]
  */

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
    })

/*
    [
        {
            title: 'Book Three',
            genre: 'History',
            publish: 1999,
            edition: 2007
        }
    ]
*/

console.log(userBooks);