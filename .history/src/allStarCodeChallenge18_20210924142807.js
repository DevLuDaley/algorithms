function strCount(str, letter){
    str = str.toLowerCase()
    letter = letter.toLowerCase()
    if (str.length == 0 ){
        return 0
    }
    
    if (str.length == 1 && str[0] != letter ){
        console.log(0)
        return 0
    }

    if(str.includes(letter)){
    var counter = 1

    let box = str.replace(letter, "")

    for(let solo of box){
            if (solo == letter)
            counter ++
    }
        console.log(counter);
        return counter;
    }
}

strCount('Helo', 'l'); //1
strCount('Hello', 'l'); //2
strCount('Hellothere', 'e'); //3
strCount('Helllogggggggggg', 'g'); //10
strCount('Helllog', 'g'); // 1
strCount('Haywire', 'y') //1
strCount('w', 'l'); //0
strCount('B', 'b'); //0
strCount('w', 'l'); //0