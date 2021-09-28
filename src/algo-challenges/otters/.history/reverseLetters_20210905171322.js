function reverseWordsInASentence(str) {

// ! recursive break rule goes here
    let splitter = str.split(' ')

// ! recursively solve iterate until array.length == 0

var reverseLetters = (arr) => {
    for (word of arr){
        var newWords = word.split("").reverse().join("")
        console.log(newWords)
        return newWords 
    }
}
reverseLetters(splitter)
}
// reverseWordsInASentence("now this is podracing")
reverseWordsInASentence("it's a trap")