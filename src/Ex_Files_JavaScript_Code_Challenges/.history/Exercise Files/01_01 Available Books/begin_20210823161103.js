/*
  WRITE YOUR SOLUTION HERE
  book class
  Title
  Author
  ISBN
  numCopies

  getAvailability()
  0 = "out of stock"
  <10  = low stock
  Else => "in stock"


  sell(numSold (subtract from numCopies)) 
      default to 1 if no args
      restock(nbumCopies)

*/

function Book(title, author, ISBN, numCopies){
    this.title = title
    this.author = author
    this.ISBN = ISBN
    this.numCopies = numCopies
}

// ! We declare this function on the prototype because we don't need to create a new instance of this function each time we make a new object, We can declare it on the prototype and each book instance can use the prototype's function


Book.prototype.getAvailability = function(){
  if (this.numCopies == 0) {
    return "Sorry, We're out of stock"
  } else if(this.numCopies < 10){
    return "Low stock"
  }
  else {
    return "in stock"
  }
}
// var getAvailability();