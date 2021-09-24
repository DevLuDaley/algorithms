// function strCount(str, letter){  
//   return str.split(letter).length-1
// }
// module.exports = strCount;

function strCount(str, letter){  
  // return str.split(letter).length-1
  let strSplit = str.split(letter)
  console.log(strSplit)
  let strLength = strSplit.length-1
  console.log(`strLength = ${strLength}`)
  // return str.split(letter).length-1
}
module.exports = strCount;

// function strCount(str, letter){
//     if (str.length == 0 ){
//         return 0
//     }

//     str = str.toLowerCase()
//     letter = letter.toLowerCase()
    
//     if (str.length == 1 && str[0] != letter ){
//         console.log(0)
//         return 0
//     }
    

//     if(str.includes(letter)){
//     var counter = 1

//     let box = str.replace(letter, "")

//     for(let solo of box){
//             if (solo == letter)
//             counter ++
//     }
//         console.log(counter);
//         return counter;
//     }

//     else
//     console.log(0) 
//     return 0
// }

// strCount('Helo', 'l'); //1
// strCount('Hello', 'l'); //2
strCount('Hellothere', 'e'); //3
// strCount('Helllogggggggggg', 'g'); //10
// strCount('Helllog', 'g'); // 1
// strCount('Haywire', 'y') //1
// strCount('w', 'l'); //0
// strCount('B', 'b'); //0
// strCount('Bolivia', 'li'); //0
// strCount('w', 'l'); //0
// strCount('lhcebdzkbajghfhdhejefzhjkhifgagzi', 'd'); //2
// strCount('lllcdc', 'k'); //0
// function strCount(str, letter){  
//   return str.split(letter).length-1
// }
// module.exports = strCount;