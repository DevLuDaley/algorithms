function reverseWordsInASentence(str) {
    // ! add notes
    // ! add error handing
    //  ! what happens if some enters a number?
    //  ! ensure strings are the only data tye accepted

    let splitter = str.split(' ')
    console.log(`🚀 ~ file: reverseWordsInASentence.js ~ line 8 ~ reverseWordsInASentence ~ splitter`, splitter)

    var reverseLetters = (arr) => {
        var displayBox = []
        for (word of arr){
            var flippedWord = word.split("").reverse().join("")
            displayBox.push(flippedWord)
        }
        console.log(reversedSentence)
        var reversedSentence =  displayBox.join(" ")
        return reversedSentence
    }
    reverseLetters(splitter)
}
reverseWordsInASentence("now this is podracing")
reverseWordsInASentence("it's a trap")