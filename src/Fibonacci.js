var fibonacci1 = (result, len)=>{
    var num1 = result[0],
        num2 = result[1],
        next,
        count = 2;
    while (count < len) {
        // add num1 && num2 to create the next number in the sequence
        next = num1 + num2;
        // adjust variables to assign the next number
        num1 = num2
        num2 = next
        result.push(next)
        count++;
    }
    console.log(result)
    return result

    // }
}
// fibonacci1([0,1], 15)

var fibonacci2 = (result, len) => {
    if (result.length >= len){
        return result
    }

    // 2nd to last and last number
    // point to first value in the array
    result.push(result[result.length -2] + result[result.length -1])
    console.log(fibonacci2(result, len))
    // return fibonacci2(result, len)
}

fibonacci2([0,1], 15)

var fibonacci3 = (n)=>{
    if (n == 1){
    console.log(1);
    }
    else if (n == 2) {
        console.log(2);
        return 2
    }

    else if (n > 2){
        return fibonacci3(n-1) + fibonacci3(n)
    }
}

// }

// fibonacci3(1)









var fibonacciWrong = (num1, num2) => {
//take num1 && num2 from an array of numbers or a sequence
//add the two numbers
console.log(num1);
console.log(num2);

// var fibNum
var fibNum = num1 + num2
//return the result of the two numbers
// console.log(fibNum);
// next number in sequence becomes num2 
// rerun program unless some status is met
if (fibNum <= 21){
fibNum = num1 + num2
// console.log(num1);
// console.log(num2);
// console.log(fibNum);
console.log("This is NUM1 => ", num1);
 console.log("This is NUM2 => ", num2);
     console.log("This is FibNum => ", fibNum);
    
     num1 = num2
     num2 = fibNum
     
    //  console.log("This is NUM1 => ", num1);
    //  console.log("This is NUM2 => ", num2);
    //  console.log("This is FibNum => ", fibNum);
    fibonacciWrong(num1, num2)
}

}
// fibonacciWrong(1,2)

