function strCount(str, letter){  
  //code here

//   create a basecase - to excluse bad data/simple args
// if (str.length == 0 ){
//     console.log("nothing to see here");
// }

// else 
if(str.includes(letter)){
var counter = 1

let box = str.replace(letter, "")

for(let solo of box){
        if (solo == letter)
        counter ++
}
    console.log(counter);
    return counter;
}
else
    console.log(1);
    return 1
}
strCount('Helo', 'l'); //1
strCount('Hello', 'l'); //2
strCount('Hellothere', 'e'); //3
strCount('Helllogggggggggg', 'g'); //10
strCount('Helllog', 'g'); // 1
// strCount('Haywire', 'g');
// strCount('w', 'l');