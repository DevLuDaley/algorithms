// var removeSpacesInAString = (word)=> {
var noSpace = (x)=> {
// function noSpace(x){
if (x.includes(" ")) {
    var newWord = x.replace(/\s/g, "");
    console.log(newWord);
  return newWord
} else {
  console.log(x);
    return x
  }
  }

noSpace("lots of words");
noSpace("              wow a              ");
noSpace("    basket ball-fan                dom");