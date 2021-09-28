function reverseWordsInASentence(str) {

// ! recursive break rule goes here

    let splitter = str.split(' ')
    console.log("splitter => ", splitter)
    console.log("string.length => ", str.length)
    console.log("string.length => ", splitter.length)

    // console.log("splitter.length => ",splitter.length);
// ! recursively solve iterate until array.length == 0
// splitter.map(word => console.log(word))
var reverseLetters = (arr) => {
    for (word of arr){
        // console.log(word);
        var newWords = word.split("").reverse().join("")
        console.log(newWords)
        return newWords 
    }
}

reverseLetters(splitter)

}

reverseWordsInASentence("now this is podracing")
// reverseWordsInASentence("it's a trap")


// var reverseLetters = (arr) => {
//     // for (var i = 0; i < arr.length; i++){
//     for (word of arr){
//         // console.log(i);
//         console.log(word);
//         var newWords = word.split("").reverse().join("")
//         // newWords 
//         return newWords
//     }

// }
// var splitter = ["now", "this", "is", "podracing"]
// console.log(splitter.length)
// reverseLetters(splitter)