
//! 7kyu Categorize New Member
//! categorizeNewMember
//! https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript


/*
  ! input = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

! senior = age >= 55 && handicap > 7 

*/

/*
  ! output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/
function openOrSenior(data){
    // create varaible to hold data.length
  let dataLength = data.length;
//   instantiate a container array
  let displayBox = []
//   iterate over each element (array) in the input array aka data 
// push either string "Senior" or "Open" into displayBox for each element in the data array
for (let i = 0;  i < dataLength; i++){
    if (data[i][0] >= 55 && data[i][1] >7 ){
        displayBox.push("Senior")
        // console.log("Senior");
        // console.log(displayBox);
    }
    else{ 
        // console.log("Open"); 
        displayBox.push("Open"); 
}
}
// console.log(displayBox);
//  return displaybox with strings with a string of "Senior" or "Open" representing each member's status

return displayBox
}

// data = "this is working"
data = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
openOrSenior(data)