function reverseWordsInASentence(str) {
    //! str must 2 characters or more
    // ! str must contain a blank space
    // ! str must not be a hash/ob {} or an array []
    // ! samples for the edge cases below

    if (str.length >= 2 
        && str.includes(" ") 
        && !str.includes("[" || "]" || "{" || "}") )
    {
    let splitter = str.split(' ')
    var reverseLetters = (arr) => {
        var displayBox = []
        for (word of arr){
            var flippedWord = word.split("").reverse().join("")
            displayBox.push(flippedWord)
        }
        var reversedSentence = displayBox.join(" ")
        return reversedSentence
    }
    reverseLetters(splitter)
    }
    else { return "Please enter multiple words."}
}

// !included samples + extras for edge cases
//  reverseWordsInASentence("now tHis is podracing")
//  reverseWordsInASentence("it's A trap")
//  reverseWordsInASentence("i")
//  console.log(reverseWordsInASentence("9999")) //fail
    console.log(reverseWordsInASentence("91 79")) //pass
//  console.log(reverseWordsInASentence("[[J9 9J9][J9 9J9]]"))
//  reverseWordsInASentence("wen drow")