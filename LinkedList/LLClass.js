class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }
    let tempPtr = this.head;
    // reach the end of linked list.
    while (tempPtr.next !== null) {
      tempPtr = tempPtr.next;
    }
    tempPtr.next = newNode;
    this.size++;
  }

  display() {
    let tempPtr = this.head;
    while (tempPtr !== null) {
      console.log(tempPtr.data);
      tempPtr = tempPtr.next;
    }
  }

  unshift(value) {
    // create a new object(node)
    // make next property of newly created object point to value that head is pointing to.
    // we can update head so that it points to newly created node.
    let newNode = new Node(value);

    newNode.next = this.head;

    this.head = newNode;
    this.size++;
  }
  shift() {
    if (this.head !== null) {
      this.head = this.head.next;
      this.size--;
    }
  }

  pop() {
    if (this.head === null) {
      return false;
    } else if (this.head.next === null) {
      this.head = null;
      this.size--;
      return true;
    } else {
      let currPtr = this.head;
      let prevPtr = null;
      while (currPtr.next !== null) {
        prevPtr = currPtr;
        currPtr = currPtr.next;
      }
      prevPtr.next = null;
      this.size--;
      return true;
    }
  }

  deleteNode(target) {
    if (this.head === null) {
      return false;
    } else if (this.head.data === target) {
      // you can call the shift() method here.
      this.head = this.head.next;
      this.size--;
      return true;
    } else {
      let currPtr = this.head;
      let prevPtr = null;
      while (currPtr !== null && currPtr.data !== target) {
        prevPtr = currPtr;
        currPtr = currPtr.next;
      }
      if (currPtr !== null) {
        prevPtr.next = currPtr.next;
        this.size--;
        return true;
      } else {
        return false;
      }
    }
  }
}