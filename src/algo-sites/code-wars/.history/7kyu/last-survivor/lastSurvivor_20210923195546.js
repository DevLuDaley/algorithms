function lastSurvivor(letters, coords) {
  for (element of coords){
    letters = letters.replace(letters[element],"")
//     letters.charAt([element]).replace(,"")
  }
// return letters[0]
console.log(`🚀 ~ line 7 ~ letters[0]`, letters[0])
return letters[0]
}

var long = 'foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr' 
var longer = [8,59,52,93,21,40,88,85,59,10,82,18,74,59,51,47,75,49,23,56,1,33,39,33,34,44,25,0,51,25,36,32,57,10,57,12,51,55,24,55,31,49,6,15,10,48,27,29,38,30,35,42,23,32,9,39,39,36,8,29,2,33,14,3,13,25,9,25,18,10,1,2,20,8,2,11,5,7,0,10,10,8,12,3,5,1,7,7,5,1,4,0,4,0,0,1]

lastSurvivor(long,longer)