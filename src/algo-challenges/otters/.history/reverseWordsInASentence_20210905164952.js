function reverseWordsInASentence(str) {

// ! recursive break rule goes here

    let splitter = str.split(' ')
    console.log("splitter => ", splitter)
    console.log("string.length => ", str.length)
    console.log("string.length => ", splitter.length)

    // console.log("splitter.length => ",splitter.length);
// ! recursively solve iterate until array.length == 0
// splitter.map(word => console.log(word))

var reverseLetters = (arrOfWords) => {
// for (char in amount){
    console.log(arrOfWords);
    
    if (arrOfWords.length > 0){
        // var revdChar = arrOfWords[0].split("").reverse().join("")
        console.log(arrOfWords);
    }
reverseLetters(arrOfWords.length - 1)
// }

    console.log(revdChar);
}
splitter

console.log(splitter.length)
reverseLetters(splitter)

var rev1 = splitter[0].split("").reverse().join("")
var rev2 = splitter[1].split("").reverse().join("")
var rev3 = splitter[2].split("").reverse().join("")
var rev4 = splitter[3].split("").reverse().join("")


    console.log("ONE=> ", rev1)
// console.log("FIRST=> ", splitter[1].split("").reverse().join())
    console.log("TWO=> ", rev2)
    console.log("THREE=> ", rev3)
    console.log(`"${rev1} ${rev2} ${rev3}"`)
    console.log(`"${rev1} ${rev2} ${rev3} ${rev4}"`)
        return `"${rev1} ${rev2} ${rev3} ${rev4}"`

}

reverseWordsInASentence("now this is podracing")
// reverseWordsInASentence("it's a trap")