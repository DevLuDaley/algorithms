function lastSurvivor(letters, coords) {
    // console.log(letters[92]);
    // console.log(letters[93]);
    // console.log(letters[94]);
  for (num of coords){
    // letters.charAt(num) = ""
    // letters.charAt(letters[num]) = ""
    // var fixedLetters = letters.replace(letters[num],"")
    var letters = letters.replace(letters[num],"")
    // letters = letters.replace(letters[num+1],"")
    // letters = letters.substr(letters[num], letters.length)
    // letters = letters.substr(letters[num], letters.length)

    // letters = letters.slice(letters[num])
//     letters.charAt([element]).replace(,"")
// console.log(letters[num]);
  }
// return letters[0]
// console.log(`🚀 fixedLetters => `, fixedLetters)
console.log(`🚀 fixedLetters => `, fixedLetters)
// console.log(`🚀 letters => `, letters)
return fixedLetters
}

var str1 = 'foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr' 
var arr1 = [8,59,52,93,21,40,88,85,59,10,82,18,74,59,51,47,75,49,23,56,1,33,39,33,34,44,25,0,51,25,36,32,57,10,57,12,51,55,24,55,31,49,6,15,10,48,27,29,38,30,35,42,23,32,9,39,39,36,8,29,2,33,14,3,13,25,9,25,18,10,1,2,20,8,2,11,5,7,0,10,10,8,12,3,5,1,7,7,5,1,4,0,4,0,0,1]


var str2 = 'tkapmibxliokftpxrwsljsdl' 
var arr2 = [12,3,2,8,16,15,13,12,15,0,6,6,2,10,3,8,7,1,5,0,2,1,1]
console.log(str2.length);
console.log(arr2.length);
lastSurvivor(str2,arr2)