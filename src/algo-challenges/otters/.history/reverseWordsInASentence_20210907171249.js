function reverseWordsInASentence(str) {
    console.log("91 79".split(" "));
    // ! add notes
    //[x] ! add error handing
    //[x]  ! what happens if some enters a number?
    //  ! with more time I'd make it case sensitive
    //  ! use an alphabet like below to ensure strings are the only data type accepted
    // const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //! does not allow words shorter than 2 CharacterData
    // ! must be at least 2 collections of characters
    // ! must not be a hash/ob {} or an array []

// console.log(alphabet.includes(str)) // 1
// console.log(str.length) // 1
    if (str.length > 2 
        && str.includes(" ") 
        && !str.includes("[" || "]" || "{" || "}") )
    {
    let splitter = str.split(' ')
    // let splitter = str.toLowerCase.split(' ')
    // console.log(`🚀 ~ splitter`, splitter)

    var reverseLetters = (arr) => {
        var displayBox = []
        for (word of arr){
            var flippedWord = word.split(" ").reverse().join("")
            // console.log(`🚀 ~ flippedWord`, flippedWord)
            displayBox.push(flippedWord)
        }
        var reversedSentence = displayBox.join(" ")
        // console.log(reversedSentence)
        return reversedSentence
    }
    reverseLetters(splitter)
}
else { return "please enter a multiple words to be reversed"
    // console.log("please enter a multiple words to be reversed")
}
}
// reverseWordsInASentence("now tHis is podracing")
// reverseWordsInASentence("it's A trap")
// reverseWordsInASentence("i")
// console.log(reverseWordsInASentence("9999")) //fail
console.log(reverseWordsInASentence("91 79")) //pass
// console.log(reverseWordsInASentence("[[J9 9J9][J9 9J9]]"))
// reverseWordsInASentence("wen drow")