function largestOfFour(arr) {
	return arr;
}

largestOfFour([
	[4, 5, 1, 3], //0
	[13, 27, 18, 26], //1 
	[32, 35, 37, 39], //2
	[1000, 1001, 857, 1]]); //3

let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

let arr1 = arr[0];
let arr2 = arr[1];
let arr3 = arr[2];
let arr4 = arr[3];
// console.log(arr1)

let arrSet = [arr1, arr2, arr3, arr4];
for (let set of arrSet)
// let counter = 0

	for (let each of set)
	// var counter = 0
		if(each > 0){
			let counter = 0;
			counter = each;
		}
console.log(counter);


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //should return [27, 5, 39, 1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); //should return [9, 35, 97, 1000000].
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); //should return [25, 48, 21, -3].