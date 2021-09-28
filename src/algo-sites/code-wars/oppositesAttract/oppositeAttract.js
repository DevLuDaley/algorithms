/*
https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

*/


// function lovefunc(flower1, flower2){
function lovefunc(flower1,flower2){
    // console.log("flower1", flower1 % 2 == 0);
    // console.log("flower2", flower2 % 2 != 0);
    // if (flower1 == flower2 || flower1 % 2 == 0 && flower2 % 2 == 0 || flower1 % 2 == 1 && flower2 % 2 == 1) {
    if ((flower1 + flower2) % 2 == 0 //&& flower2 % 2 == 0 || flower1 % 2 == 1 && flower2 % 2 == 1
    )
    {
        console.log(false);
        return false
    }
    // else if (flower1 || flower2 % 2 == 0 && flower1 || flower2 % 2 == 1){
    else {
        console.log(true);
    }
}


lovefunc(1,4) //true
lovefunc(2,2) // false
lovefunc(0,1) //true
lovefunc(0,0) //false
lovefunc(5,5) //false
lovefunc(3,5) //false
lovefunc(902,812) //false
// lovefunc("1,4 => ",1,4)
// lovefunc("2,2 => ",2,2)
// lovefunc("0,1 => ",0,1)
// lovefunc("0,0 => ",0,0)
