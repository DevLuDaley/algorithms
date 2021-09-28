function reverseWordsInASentence(str) {
    // ! add notes
    // ! add error handing
    //  ! what happens if some enters a number?
    //  ! ensure strings are the only data tye accepted

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
reverseWordsInASentence("now this is podracing")
reverseWordsInASentence("it's a trap")