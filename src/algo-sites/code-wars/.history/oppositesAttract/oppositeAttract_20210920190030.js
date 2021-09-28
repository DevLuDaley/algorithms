/*
https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

*/


// function lovefunc(flower1, flower2){
function lovefunc(f1, f2){
    if (f1 == f2) {
        console.log(true);
        return true
    } 
//   console.log(f1+ f2);
    return f1 + f2
}


lovefunc(1,4)
lovefunc(2,2)
lovefunc(0,1)
lovefunc(0,0)
// lovefunc("1,4 => ",1,4)
// lovefunc("2,2 => ",2,2)
// lovefunc("0,1 => ",0,1)
// lovefunc("0,0 => ",0,0)
