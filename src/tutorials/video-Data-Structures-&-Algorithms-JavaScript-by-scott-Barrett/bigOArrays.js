
function bigOArrays1(n){

    for (let i = 0; i < n; i++){
        console.log(i);
    }

    for (let j = 0; j < n; j++){
        console.log(j);
    }

}

// bigOArrays()
//! O(1) operations = push && pop
var myArr = [11,3,23,7]
myArr.push(17)
// myArr = [11,3,23,7, 17] the new number is added to the end and no other change is made to the array unlike shift()
myArr.pop()

//! O(n) operations = (un)shift where n = array.length 
// myArr.shift()
// myArr.shift() will remove the first item and all others will need to shift down 1 slot unlike push()
// myArr.unshift(11)
// myArr.unshift() does the same as above
// !myArr.splice does the same as above
// !
console.log(myArr)
var nu = myArr.splice(1,0, "hi")
// console.log(nu.push(99,34))
console.log(nu)
console.log("hi")
//  ! search by value vs search by index
// ! what index == arrays but adding and removing from the beginning means a different data structure and that is how u decide based on Big O