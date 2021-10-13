const slicer = (arr=[5,20,10,8]) => {
    // ! [5,20,10,8]
    arr.slice(1)
    
    let box = [3,5,12,16]
    // box.slice(2-3)
    // box.slice(2-2)
    // box.slice(3-2)
    // box.slice(3-1)
    // box.slice(3-5)
    
    let crate = [3,12,5,9,7,12,16]
    let newCrate = crate.slice(2)
    crate.length
          newCrate.length
    let newerCrate = newCrate.slice()
}
slicer()
// slicer(arr)