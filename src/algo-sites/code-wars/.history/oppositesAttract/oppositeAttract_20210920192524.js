/*
https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

*/


// function lovefunc(flower1, flower2){
function lovefunc(f1, f2){
    console.log("f1", f1 % 2 == 0);
    console.log("f2", f2 % 2 != 0);
    if (f1 == f2) {
        console.log(true);
        return true
    }
    // else
    //   if (f1 == 1 || f1 % 2 == 0 && f2 % 2 == 1){
    else if (f1 || f2 % 2 == 0 && f1 || f2 % 2 == 1){
        console.log(true);
    }
    else{
        console.log(false);
    }
//   console.log(f1+ f2);
    return f1 + f2
}


lovefunc(1,4) //true
lovefunc(2,2) // false
lovefunc(0,1) //true
lovefunc(0,0) //false
lovefunc(5,5) //false
lovefunc(3,5) //true
// lovefunc("1,4 => ",1,4)
// lovefunc("2,2 => ",2,2)
// lovefunc("0,1 => ",0,1)
// lovefunc("0,0 => ",0,0)
