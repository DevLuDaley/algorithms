// let b = [75, 22, "r", [{key: "value"}]]
// console.log(`🚀 ~ line 3 ~ ~ b => `, typeof b)

function firstUniqueCharacterIndex(words) {

    words = words.toLowerCase()
    console.log(words)
    let count = 0

        for (char in words){
 let box = words.replace(words[char], "")
// console.log(box)
if (box.includes(words[char])){
        // if (box.includes(words[i])){
        count++
        count == words.length ? console.log(-1) : console.log(null);
        // count == words.length ? -1 : null;
        }
        console.log(`🚀 ~ file: fixFirstUniqueCharacterIndex.js ~ line 19 ~ firstUniqueCharacterIndex ~ count`, count)

}

}



// firstUniqueCharacterIndex("hello there") //4
// firstUniqueCharacterIndex("blahblah") //-1
// firstUniqueCharacterIndex("collaboration") //0
// firstUniqueCharacterIndex("Balloon Breath") //6
// firstUniqueCharacterIndex("Caancun") //5
// firstUniqueCharacterIndex("Caancuun") //-1

var f = firstUniqueCharacterIndex("hello there")

var callEm = (f) => {
console.log(f)
}