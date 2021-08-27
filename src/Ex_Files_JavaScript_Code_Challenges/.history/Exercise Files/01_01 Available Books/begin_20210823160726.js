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

Book.prototype.getAvailability = function
// var getAvailability();