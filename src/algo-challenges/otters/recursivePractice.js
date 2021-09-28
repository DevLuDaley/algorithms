function reverseString(string){
    // console.log(string.length + " => SSSS");

    if(string.length == 0){
        console.log("Please enter a valid string");
        return string
        }
    else {
        // break
        console.log(`🚀 ~ line 7 ~ reverseString`, reverseString(string[1]) + string[0])
        // return reverseString([string[1]]) + string[0]
        }
}

// reverseString("Educative")
// reverseString("")

function simpleCountDownRecursive(n){
	if(n == 0) return;

	console.log(n + "...");
	simpleCountDownRecursive(n-1);
}

simpleCountDownRecursive(9)

function simpleCountDownLoop(n) {
	while(n > 0) {
		console.log(n + "...");
		n -= 1;
	}
	}

simpleCountDownLoop(10)

