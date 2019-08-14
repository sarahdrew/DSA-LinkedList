class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        //shows beginning of list
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {

        if (this.head === null) {
            this.insertFirst(item);
        }

        else {
            let tempNode = this.head;

            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }

            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(newNodeValue, targetNodeValue) {

        if (this.head === null) {
            return null;
        }

        // find a node whose value === targetNodeValue, & that node is the current and the one before it is the previous

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== targetNodeValue)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        //  end of list didn't find item
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        const newNode = new _Node(newNodeValue, currNode);

        previousNode.next = newNode;
    }

    insertAfter(newNodeValue, targetNodeValue) {

        if (this.head === null) {
            return null;
        }

        const targetNode = this.find(targetNodeValue);

        if (targetNode === null) {
            return null;
        }

        const nextNode = targetNode.next;

        const newNode = new _Node(newNodeValue, nextNode);

        targetNode.next = newNode;
    }

    insertAt(newNodeValue, targetPosition) {
        if (this.head === null) {
            return null;
        }

        // add at start
        if (targetPosition === 0) {
            const newNode = new _Node(newNodeValue, this.head);
            this.head = newNode;
            return;
        }

        let prevNode = null;
        let currNode = this.head;
        let currNodePosition = 0;

        while (currNodePosition !== targetPosition && currNode !== null) {
            prevNode = currNode;
            currNode = currNode.next;
            currNodePosition++;
        }
        if (currNode === null && currNodePosition !== targetPosition) {
            return null;
        }

        const newNode = new _Node(newNodeValue, currNode);
        prevNode.next = newNode;

    }

    remove(item) {
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;

        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save previous node
            previousNode = currNode;
            currNode = currNode.next;
        }

        // end of list didn't find item
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        // Did find item, delete it
        previousNode.next = currNode.next;


    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }

        while (currNode.value !== item) {

            // If current node is last node, then item not found
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }

        // Found it
        return currNode;
    }

}

module.exports = LinkedList;