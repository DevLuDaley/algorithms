function firstUniqueCharacterIndex(words) {
    // if (!words.includes("[" || "]" || "{" || "}") )
    words = words.toLowerCase()
    let count = 0
    for (char in words){
        let box = words.replace(words[char], "")
        if (box.includes(words[char])){
            count++
            // count == words.length ? console.log(-1) : null;
            count == words.length ? -1 : null;
            return count == words.length ? -1: null;
        }
        else
            {
             var nrLetterIndex = words.indexOf(words[char]);
            //  console.log(nrLetterIndex);
             return nrLetterIndex
            }
    }

}

// Examples:
// words = “hello there”
// Answer: 4
// words = “blahblah”
// Answer: -1
// words =“collaboration”
// Answer: 0

firstUniqueCharacterIndex("hello there") //4
firstUniqueCharacterIndex("blahblah") //-1
firstUniqueCharacterIndex("collaboration") //0
firstUniqueCharacterIndex("Balloon Breath") //6
console.log(firstUniqueCharacterIndex("Caancun")) //5
firstUniqueCharacterIndex("Caancuun") //-1
