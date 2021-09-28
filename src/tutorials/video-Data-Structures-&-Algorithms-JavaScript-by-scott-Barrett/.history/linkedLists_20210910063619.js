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

   
}
let myLinkedList = new LinkedList(7)
myLinkedList.push(4);
myLinkedList.push(9);
// console.log(myLinkedList.push(4));
// console.log(myLinkedList.push(5));
let myTRee = new BST()
myTRee.insert(47)
myTRee.insert(21)
myTRee.insert(76)
myTRee.insert(18)
myTRee.insert(52)
myTRee.insert(82)

// console.log(myLinkedList);