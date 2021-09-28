function reverseWordsInASentence(str) {
    // ! add notes
    // ! add error handing
    //  ! what happens if some enters a number?
    //  ! ensure strings are the only data tye accepted
console.log(str.length)
    if (str.length < 2) {
    let splitter = str.split(' ')
    console.log(`🚀 ~ splitter`, splitter)

    var reverseLetters = (arr) => {
        var displayBox = []
        for (word of arr){
            var flippedWord = word.split("").reverse().join("")
            console.log(`🚀 ~ flippedWord`, flippedWord)
            displayBox.push(flippedWord)
        }
        var reversedSentence =  displayBox.join(" ")
        console.log(reversedSentence)
        return reversedSentence
    }
    reverseLetters(splitter)
}
else { return "please enter a valid sentence; multiple words to be reversed"}
}
// reverseWordsInASentence("now this is podracing")
// reverseWordsInASentence("it's a trap")
reverseWordsInASentence("i")