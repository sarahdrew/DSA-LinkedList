const LinkedList = require('./LinkedList');

const main = function () {
    //creating a singly linked list
    const SLL = new LinkedList();


    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');

    SLL.insertFirst('Tauhida');

    SLL.remove('squirrel');

    SLL.insertBefore('Athena', 'Boomer');

    SLL.insertAfter('Hotdog', 'Helo');

    SLL.insertAt('Kat', 2);

    SLL.remove('Tauhida');
}
//supplemental functions for a linked list
//free functions instead of methods of the linked list class
//display, size, isEmpty, findPrevious, findLast

const display = function (list) {

    if (list.head === null) {
        console.log(null);
    } else {

        let node = list.head;

        while (node !== null) {
            console.log(node.value);
            node = node.next;
        }
    }
};

const size = function (list) {

    let size = 0;
    let currNode = list.head;

    while (currNode !== null) {
        currNode = currNode.next;
        size++;
    }

    return size;
};

const isEmpty = function (list) {

    return list.head === null;
};

const findPrevious = function (list, targetValue) {

    let prevNode = null;
    let currNode = list.head;

    while (currNode.value !== targetValue) {
        prevNode = currNode;
        currNode = currNode.next;


        if (currNode.next === null) {
            return null;
        }
    }

    return prevNode;
};

const findLast = function (list) {

    let currNode = list.head;

    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    return currNode;
};



main();


//4 Write what this does:
//answer: O(n^2)  quadratic
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    //while curent has a value, new node is current
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {

            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
// removes all subsequent duplicate values

//reverseList
//time complexity should be O(n)
//shoudl reverse the direction of the given singly linked list. all ptrs should point backwards
const reverseList = function (list) {

    // If list is empty
    if (list.head === null) {
        return list;
    }

    let previousNode = null;
    let currentNode = list.head;

    // loop over every node
    while (currentNode !== null) {

        let nextNode = currentNode.next;

        currentNode.next = previousNode;

        previousNode = currentNode;
        currentNode = nextNode;
    }
    //reversed
    list.head = previousNode;

    return list;
};

// 3rd from the end
// O(n)
function thirdFromTheEnd(list) {
    if (!list.head) {
        return null;
    }
    if (!(list.head && list.head.next.next && list.head.next.next.next)) {
        console.log('list is not long enough');
        return null;
    }
    let current = list.head;
    while (current !== null) {

        if (current.next.next.next.next === null) {
            return current.value;
        }
        current = current.next;
    }
}

// Middle of a List
// O(n)
function getMiddle(list) {
    if (!list.head) {
        return null;
    }
    let current = list.head;
    let fastCounter = list.head;
    while (fastCounter !== null) {
        if (fastCounter.next !== null) {
            fastCounter = fastCounter.next.next;
        }
        else {
            return current.value;
        }
        if (current.next !== null) {
            current = current.next;
        }
    }
    return current.value;
}

// Cycle in a list
// O(n)
function findCycle(list) {
    if (!list.head) {
        return null;
    }
    let current = list.head;
    let fastCounter = list.head;
    do {
        if (fastCounter.next !== null && fastCounter.next.next !== null) {
            fastCounter = fastCounter.next.next;
        } else {
            return false;
        }
        current = current.next;
    } while (fastCounter.value !== current.value);
    return true;
}


// given a SORTED linked ListeningStateChangedEvent
//write a function insertInSortedOrder to insert an item in the sorted linked list preserving the order of the list
//may not use another list or any other data structure
//only go through list once, O(n)



function insertSorted(list, item) {
    let node = list.head;
    //if first and item are the same, insert to first spot
    if (node === null || node.value >= item) {
        list.head = new _Node(item, node);
    }
    //otherwise, loop until 
    let previousNode = list.head;
    while ((node !== null) && (node.value < item)) {
        previousNode = node;
        node = node.next;
    }
    previousNode.next = new _Node(item, node);
}