
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        var current = this.head
        var newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) return undefined
        var removedHead = this.head
        this.head = removedHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return removedHead
    }

    unshift(val) {
        if (!this.head) return this.push(val)
        var movingHead = this.head
        this.head = new Node(val)
        this.head.next = movingHead
        this.length++
        return this.head
    }

    get(index) {
        if (0 > index || index > this.length) return null
        var count = 0
        var searchNode = this.head
        while (index !== count) {
            searchNode = searchNode.next
            count++
        }
        return searchNode
    }

    set(val, index) {
        var foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(val, index) {
        if (0 > index || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)

        var newNode = new Node(val)
        var prev = this.get(index - 1)
        var temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index) {
        if (0 > index || index > this.length) return false
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        var previousNode = this.get(index - 1)
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--
        return removed
    }

    reverse() {
        var node = this.head
        this.head = this.tail
        this.tail = node
        var next;
        var prev = null
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

    traverse() {
        var current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }

    }
}


var list = new SinglyLinkedList()


// list.pop()
// list.shift()
list.unshift(0)
list.push(1)
list.push(2)
list.push(3)
// console.log(list.get(-6))
// console.log(list.set(100, 1))
// list.insert(20, 2)
// list.remove(2)
list.reverse()

list.traverse()

// console.log(list)
