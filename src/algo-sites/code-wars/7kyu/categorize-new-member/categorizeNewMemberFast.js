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
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  newThing = data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  console.log(`🚀 ~ file: categorizeNewMemberFast.js ~ line 23 ~ openOrSenior ~ newThing`, newThing)
  // return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// data = "this is working"
data = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
openOrSenior(data)


function openOrSenior2(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}