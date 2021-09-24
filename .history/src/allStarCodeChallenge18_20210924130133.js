function strCount(str, letter){  
  //code here

//   create a basecase - to excluse bad data/simple args
// if (str.length == 0 ){
//     console.log("nothing to see here");
// }

// else 
if(str.includes(letter)){
var counter = 0
var strCopy = str
// str += "f"

for(let solo of str){
    let box = str.replace(str[solo], "")
    if (solo == strCopy){
        counter ++
    }
    // strCopy

}
console.log(counter);
}
else 
console.log(1);
return 1
}
strCount('Hello', 'l');
// strCount('w', 'l');