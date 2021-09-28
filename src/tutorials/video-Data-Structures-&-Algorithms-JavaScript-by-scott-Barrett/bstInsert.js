class BST {
     insert(value){
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode 
            return this
        }
        let temp = this.root
        while (true){
        if (newNode.value === temp.value) return "undefined"
        if (newNode.value < temp.value) {
            if (temp.left === null) {
                temp.left = newNode 
                return this
        }
        temp = temp.left
    } else {
        if (temp.right === null) {
            temp.right = newNode
            return this
        }
        temp = temp.right
      }
    }
  }
}

let myTRee = new BST()
myTRee.insert(47)
myTRee.insert(21)
myTRee.insert(76)
myTRee.insert(18)
myTRee.insert(52)
myTRee.insert(82)
