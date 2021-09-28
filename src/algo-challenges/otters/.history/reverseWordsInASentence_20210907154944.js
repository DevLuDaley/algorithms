function reverseWordsInASentence(str) {
    // ! add notes
    // ! add error handing
    //  ! what happens if some enters a number?
    //  ! ensure strings are the only data tye accepted
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    

console.log(alphabet.includes(str)) // 1
console.log(str.length) // 1
    if (str.length > 2 || typeof str == 'string' || alphabet.includes(str)
    
    )
    {//|| "undefined" || null) {
    let splitter = str.split(' ')
    // let splitter = str.toLowerCase.split(' ')
    console.log(`🚀 ~ splitter`, splitter)

    var reverseLetters = (arr) => {
        var displayBox = []
        for (word of arr){
            var flippedWord = word.split("").reverse().join("")
            // console.log(`🚀 ~ flippedWord`, flippedWord)
            displayBox.push(flippedWord)
        }
        var reversedSentence =  displayBox.join(" ")
        console.log(reversedSentence)
        return reversedSentence
    }
    reverseLetters(splitter)
}
else { console.log("please enter a valid sentence; multiple words to be reversed")}
}
// reverseWordsInASentence("now tHis is podracing")
// reverseWordsInASentence("it's A trap")
// reverseWordsInASentence("i")
reverseWordsInASentence("9999")