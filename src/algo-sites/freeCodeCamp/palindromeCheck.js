/*
!problems_page
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php#EDITOR
problem# = 1
! solution_page
https://www.w3resource.com/javascript-exercises/javascript-function-exercise-2.php
*/
//! check see if word is the same forward as it is backwards

// let p = "Eye"
function oldReverseWordsInASentence(string){
    // confirm that the arg is a string
    // create an empty array
    // console.log(p);
    let originalWord = string.toLowerCase()
    let wordArray = originalWord.split("")
    // console.log(originalWord);
    // console.log(wordArray);
    let reversedArray = wordArray.reverse()
    // console.log(`🚀 ~ file: palindromeCheck.js ~ line 20 ~ palindromeCheck ~ et reversedArray`, reversedArray)
    // console.log(reversedArray);
    let reversedWord = reversedArray.join("");
    console.log(`🚀 ~ file: palindromeCheck.js ~ line 23 ~ palindromeCheck ~ reversedWord`, reversedWord)
    // console.log(reversedWord);

    if(originalWord === reversedWord)   
        {console.log(`Great job! "${originalWord}" is a palindrome!`);
    } else {console.log(`Sorry bud, "${originalWord}" is not a palindrome, feel free to try again!`);
    }

// split string into an array
// reverse the split string elements inside of the array
//create a conditional statement with the following
// if the $originalWord === the $reversedWord return true or this is a pal
// else return false this is no pal it just spells $reversedWord 
}

oldReverseWordsInASentence("Mom")
oldReverseWordsInASentence("car")
oldReverseWordsInASentence("aunt")
oldReverseWordsInASentence("racecar")
// palindromeCheck("A Man, A Plan, A Canal – Panama!")


let email = "pazzazz"
   