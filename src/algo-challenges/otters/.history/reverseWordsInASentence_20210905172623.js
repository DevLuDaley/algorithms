function reverseWordsInASentence(str) {

// ! recursive break rule goes here
    let splitter = str.split(' ')

// ! recursively solve iterate until array.length == 0

var reverseLetters = (arr) => {
    var displayBox = []
    for (word of arr){
        var flippedWord = word.split("").reverse().join("")
        // console.log(newWords)
        displayBox.push(flippedWord)
    }
    
    var reversedSentence =  displayBox.join(" ")
    // console.log(reversedSentence)
    return reversedSentence
}
reverseLetters(splitter)
}
reverseWordsInASentence("now this is podracing")
reverseWordsInASentence("it's a trap")