const slicer = (arr=[5,20,10,8]) => {
    // ! [5,20,10,8]
    arr.slice(1)
    
    let box = [3,5,12,16]
    box.slice(2-3)
    
    let crate = [3,12,5,9,7,12,16]
    crate.slice(2)
    crate.slice(2).length
}
slicer()
// slicer(arr)