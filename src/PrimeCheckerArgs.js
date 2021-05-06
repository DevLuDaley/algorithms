
function PrimeChecker(num) {
    // ? how do we confirm if a number is prime or not?
    // ! unless the num == 2, the num is not divisible (to a whole number) by 2 (aka it is not an even num)
    // ! check if num is divisible by 3, 5, 7, 11

    // + confirm the input is a num or convert it to one.
    // + confirm the input is a num or convert it to one.
    // let primeBox = []
    // let notPrimeBox = []
    // let count = 100

    // ! initialization
    // ! condition
    // ! Increment
    
    var divisor = 2;
    // var i = 0

if(num == 2){
    return true
} else {
    // num.forEach(e =>
        while (num > divisor)
        {
        if(num % divisor == 0)
        //  && i !== 2 || i == 1)
        {
            return false
        } else {
                // primeBox.push(i)
                divisor++
        }
        return true
    }
    // console.log("notPrimeBox => ", notPrimeBox)
    
    // console.log("primeBox => ", primeBox)
    //+     primeBox =>  [
        //+    2,  3,  5,  7, 11, 13, 17, 19,
        //+   23, 29, 31, 37, 41, 43, 47, 53,
        //+   59, 61, 67, 71, 73, 79, 83, 89,
        //+   97
        //+ ]
        // console.log("primeBox => ", primeBox.includes(313))
        // );
        
    }
    }
    // console.log("PrimeChecker(num) 1 => ", PrimeChecker(1))
    // console.log("PrimeChecker(num) 2 => ", PrimeChecker(2))
    // console.log("PrimeChecker(num) 4 => ", PrimeChecker(4))
    // console.log("PrimeChecker(num) 23 => ", PrimeChecker(23))
    // console.log("PrimeChecker(num) 25 => ", PrimeChecker(25))
    // console.log("PrimeChecker(num) 30 => ", PrimeChecker(30))
    // console.log("PrimeChecker(num) 419 => ", PrimeChecker(419))
    // console.log("PrimeChecker(num) 137 => ", PrimeChecker(137))
    // console.log("PrimeChecker(num) 330 => ", PrimeChecker(330))

// PrimeChecker([2,3,4,5])
export default PrimeChecker