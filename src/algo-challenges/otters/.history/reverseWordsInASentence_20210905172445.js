function reverseWordsInASentence(str) {

// ! recursive break rule goes here
    let splitter = str.split(' ')

// ! recursively solve iterate until array.length == 0

var reverseLetters = (arr) => {
    var displayBox = []
    for (word of arr){
        var newWords = word.split("").reverse().join("")
        // console.log(newWords)
        displayBox.push(newWords)
    }
    
    var complete =  displayBox.join(" ")
    console.log(complete)
}
reverseLetters(splitter)
}
reverseWordsInASentence("now this is podracing")
reverseWordsInASentence("it's a trap")