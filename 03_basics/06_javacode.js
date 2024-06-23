//video 25 Hwow to js code execute. how to execute code , how call stacks are execute.
//1. execution context (code divide in two parts)
//2. call stacks (we have memory, the way function goes, execute  and how comes from memory)
//we see how our js files add in broswer and how visualize




/*
                        Javascript Execution Context
    {this is our code file}

    first Global Execution context create refer by "this" variable
    Q. broswer global execution context is window object
    js is single threaded , single process

    1. Global Execution Context
    2. Function Execution Context
    3. Eval Execution Context

    {this is our code file}
    js code run in two phases
        1.Memory Creation Phase (only memory allocate)
        2.Execution phase (perform operation and execution)


*/

//A simple code example
let val1 = 10
let val2 = 20
function addnum(num1 , num2) {
    let total = num1 + num2
    return total
}
let result = addnum(val1 , val2)
let result2 = addnum(3,4)

/*
    1. First Global execution or global environment
        and allocate in "this"

    2. Memory creation phase
        => first cycle
        collect all variable and store
        val1 => undefined
        val2 => undefined
        addnum => definition
        result1 => undefined
        result2 => undefined

    3.  execution phase
        val1 = 10 
        val2 = 20
        addnum => [
            new variable environment + execution thread
            now in addnum definition again 
                1. Memory Phase
                    val1 => undefined
                    val2 => undefined
                    total => undefined
                2. Execution Context
                    num1 => 10
                    num2 => 20
                    total => 30
                    return go to  (1) golbal executional context

            ] after this , this executional context will delete

        result1 = 30

        addnum => [
            now again new variable environment + execution thread
            Phase 1 => Memory Phase
                    val1 => undefined
                    val2 => undefined
                    total => undefined
            Phase 2 => Execution Phase
                    num1 => 3
                    num2 => 4
                    total => 7
                    return go to  (1) golbal executional context
            ]

        result2 = 7

*/

/************Call Stack *******************/

/*
LIFO => last in first out

                                                 Stack (LIFO)

                                            |                   |
                                            |-------------------|
    functionone(){                          |   functiontwo()   |       functionone() //then functionone out
                   functiontwo()            |-------------------|       functiontwo() //first functiontwo out
                 }                          |    functionone()  |
                                            |-------------------|
                                            |1.global execution |
                                            |___________________|


*/

//a simple code example
function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}

one()  //output in callstack is     three
       //                           two
       //                           one

two()   //output in callstack is     three
        //                           two

three() //output in callstack is     three
