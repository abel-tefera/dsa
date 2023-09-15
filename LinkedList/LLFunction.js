let head = null;


function display() {
    let tempPtr = head;
    while (tempPtr !== null) {
        console.log(tempPtr.data);
        tempPtr = tempPtr.next;
    }

}

function push(value) {
    let newNode = {
        next: null,
        data: value
    };
    if (head === null) {
        head = newNode;
        return;
    }

    let tempPtr = head;
    // reach the end of linked list.
    while (tempPtr.next !== null) {
        tempPtr = tempPtr.next;
    }
    tempPtr.next = newNode;
}

function unshift(value) {
    // create a new object(node)
    // make next property of newly created object point to value that head is pointing to.
    // we can update head so that it points to newly created node.

    let newNode = {
        next: null,
        data: value
    };

    newNode.next = head;

    head = newNode;
}

function shift() {
    if (head !== null) {
        head = head.next;
    }
}

function pop() {
    if (head === null) {
        return false;
    } else if (head.next === null) {
        head = null;
        return true;
    }
    else {
        let currPtr = head;
        let prevPtr = null;
        while (currPtr.next !== null) {
            prevPtr = currPtr;
            currPtr = currPtr.next;
        }
        prevPtr.next = null;
        return true;
    }
}

function deleteNode(target) {
    if (head === null) {
        return false;
    } else if (head.data === target) {
        // you can call the shift() method here.
        head = head.next;
        return true;
    } else {
        let currPtr = head;
        let prevPtr = null;
        while (currPtr !== null && currPtr.data !== target) {
            prevPtr = currPtr;
            currPtr = currPtr.next;
        }
        if (currPtr !== null) {
            prevPtr.next = currPtr.next;
            return true;
        } else {
            return false;
        }
    }
}


function deleteNodeSinglePointer(target) {
    if (head === null) {
        return false;
    } else if (head.data === target) {
        head = head.next;
        return true;
    } else {
        let tempPtr = head;
        while (tempPtr.next !== null && tempPtr.next.data !== target) {
            tempPtr = tempPtr.next;
        }
        if (tempPtr.next !== null) {
            tempPtr.next = tempPtr.next.next;
            return true;
        } else {
            return false;
        }
    }
}