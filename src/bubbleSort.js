//! called bubble sort because values bubble their way to the top
var bblSort = (arr) => {
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if(arr[j] > arr[j +1]){
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        } 
            // if dataset[j] > datset[j+1] 
        }
        console.log(arr);
}
var arr = [10,28,14,3,5,7]
var arr2 = [234, 43, 55, 63,  5, 6, 235, 547]
bblSort(arr)
bblSort(arr2)
