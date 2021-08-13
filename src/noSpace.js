// var removeSpacesInAString = (word)=> {
var noSpace = (x)=> {
// function noSpace(x){
if (x.includes(" ")) {
    var newWord = x.replace(/\s/g, "");
  return newWord
} else {
    return x
  }
  }

noSpace("lots of words");
noSpace("              wow a              ");
noSpace("lots");