function reverseWordsInASentence(str) {
    // ! add notes
    // ! add error handing
    
    let splitter = str.split(' ')

    var reverseLetters = (arr) => {
        var displayBox = []

        //! How can I do this recursively?
        //!  usually n-1 or something of the sort
        // ! start with the base case?



        // for (word of arr){
        //     var flippedWord = word.split("").reverse().join("")
        //     displayBox.push(flippedWord)
        // }
        // var reversedSentence =  displayBox.join(" ")
        // console.log(reversedSentence)
        // return reversedSentence
    }
    reverseLetters(splitter)
}
reverseWordsInASentence("now this is podracing")
reverseWordsInASentence("it's a trap")