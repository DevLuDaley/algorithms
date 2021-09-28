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
}
let myLinkedList = new LinkedList(4)
console.log(myLinkedList);

function push(value){
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
console.log(push(6));