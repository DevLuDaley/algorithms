var destructuring = (array) => {
    // var array = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

    let display = array.map(
        ([age, handicap]) => 
    (age > 54 && handicap > 7) ? 'Senior' : "Open")
    console.log(display);
}

var array = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
destructuring(array)