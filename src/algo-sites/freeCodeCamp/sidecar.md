
Problem Explanation

hints & solution 
https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-return-largest-numbers-in-arrays/16042

```
You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.
```

return an array with the largest number from each of the sub arrays

	[4, 5, 1, 3], //0
	[13, 27, 18, 26], //1 
	[32, 35, 37, 39], //2
	[1000, 1001, 857, 1]]); //3

destructure main array, itemizing each subarray (arr1,arr2... arr4)    

use a filter(cb function) to find the number with the highest value from each subarray

then combine each greatestNum into an array

return array of highest values from each of the 4 subarrays