// constructor(value) //create new node
// push(value)
// unshift(value)
// insert(index, value)

class Node{
    constructor(value){
        this.value = value
        this.next = null        
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){
    const newNode = new Node(value)
    // ! check if list is empty
    if (!this.head){
        this.head = newNode
        this.tail = newNode
        // this.tail = this.head

    }
    // ! if list is empty
    else{
        this.tail.next = newNode
    }
    this.length++
    return this
}
// console.log(push(4));

insert(value){
    const newNode = new Node(value)
    if (this.root === null) {
        this.root = newNode 
        return this
    // } else { null }
    }
    // this.root === null ? this.root = newNode : null 
    let temp = this.root
    // while (newNode === temp)
    while (true)
    if (newNode.value === temp.value) 
    return "undefined"

    if (newNode.value < temp.value) {
        console.log("right");
    }

    else if (newNode === null) console.log("insert new note or move to next");
    else


}


}
let myLinkedList = new LinkedList(7)
myLinkedList.push(4);
myLinkedList.push(9);
// console.log(myLinkedList.push(4));
// console.log(myLinkedList.push(5));
console.log(myLinkedList);