function lastSurvivor(letters, coords) {
  for (element of coords){
    letters = letters.replace(letters[element],"")
//     letters.charAt([element]).replace(,"")
  }
return letters[0]
}