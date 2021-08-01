


//! instructions
/*
Write a program that prints the numbers from 1 to 100. 
But for 
multiples of three print “Fizz” instead of the number and 
for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.

--

input = n/a
output = numbers 1 - 100
rules =
multiples of 3 print “Fizz” instead of the number 
multiples of five print “Buzz” instead of the number 
multiples of both three and five print “FizzBuzz” instead of the number.

sounds like I'll need to iterate over an array of numbers
replacing mutlitples of 3 with Fizz
replacing mutlitples of 5 with Buzz
replacing mutlitples of 15 with FizzBuzz

I should have multiples of 3 && 5 checked first then 3 then 5. I'm not sure why though. It just wouldn't quite work without that change.

// let pool = [1,...100]
// console.log(pool);
// const range = (start, end) => {
    //     const length = end - start;
    //     console.log(Array.from({ length }, (_, i) => start + i))
    //     return Array.from({ length }, (_, i) => start + i);
    // }
    
    // range(1,101)
    
    ! while (counter < 101) 
    ! if counter % 15 clg("FizzBuzz")
    ! if counter % 3 clg("Fizz")
    ! if counter % 5 clg("Buzz")
    
    */

    // let counter = 0 
    // counter += 1
    // while(counter < 101) {
    for (var counter=1; counter <= 100; counter++)
    // for (var i=1; i <= 20; i++)
    {
        if (counter % 15 == 0) {
            console.log('FizzBuzz ' + counter )
        }

        else if (counter % 3 == 0) {
            // counter ++
            console.log("Fizz " + counter);
        }
        else if (counter % 5 == 0) {
            // counter ++
            console.log("Buzz " + counter);
        }
        else {
            // counter ++
            console.log(counter);
        }
        // break
    }


    // for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }