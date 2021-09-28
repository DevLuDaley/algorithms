// let b = [75, 22, "r", [{key: "value"}]]
// console.log(`🚀 ~ line 3 ~ ~ b => `, typeof b)

function firstUniqueCharacterIndex(words) {
    // console.log(`🚀 ~ line 13 ~ words.length`, words.length)
    words = words.toLowerCase()
    let count = 0
    for (char in words){
    // for (let i = 0; i < words.length; i++){
        let box = words.replace(words[char], "")
        // let box = words.replace(words[i], "")
        if (box.includes(words[char])){
        // if (box.includes(words[i])){
        count++
        count == words.length ? console.log(-1) : null;
        count == words.length ? -1 : null;
        }
        else
            {
                var nrLetter = words[char]
                // var nrLetter = words[i]
                var nrLetterIndex = words.indexOf(words[char]);
                // var nrLetterIndex = words.indexOf(words[i]);
                console.log(nrLetterIndex);
                    return nrLetterIndex
            }
//     else{ console.log("-1");
//     break 
// }
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
firstUniqueCharacterIndex("Caancun") //5
firstUniqueCharacterIndex("Caancuun") //-1
