// https://www.codewars.com/kata/538835ae443aae6e03000547/train/javascript

/*

Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
FUNDAMENTALSFUNCTIONAL PROGRAMMINGDECLARATIVE PROGRAMMING

---returing a function
---currying in JS and other languages

*/


// https://medium.com/@iampika/part-6-javascript-functions-returning-functions-from-functions-429a3d9a55d1


const Add = (v) => {return v = n + v}

function add(n) {
  return Add(n)
}


/*

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(add(1)(3), 4, 'add one to three equals four')
  });
});

*/