class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    display() {
        console.log("--------------------")
        this.displayForw();
        this.displayRev();
        console.log(`\nSize: ${this.size}`)
        console.log("--------------------")
    }

    displayForw() {
        let tempPtr = this.head;
        while (tempPtr !== null) {
            process.stdout.write(`${tempPtr.data} -> `);
            tempPtr = tempPtr.next;
        }
        console.log("\n")
    }

    displayRev() {
        let tempPtr = this.tail;
        while (tempPtr !== null) {
            process.stdout.write(`${tempPtr.data} -> `);
            tempPtr = tempPtr.prev;
        }
        console.log("\n")
    }

    createHeadIfNull(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            this.size += 1;
            return true;
        }
    }

    append(n) {
        const node = new Node(n);
        if (this.createHeadIfNull(node)) return this;

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.size += 1;
        return this;
    }

    prepend(n) {
        const node = new Node(n);
        if (this.createHeadIfNull(node)) return this;

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.size += 1;
        return this;
    }

    insert(i, n) {
        let tempPtr = this.head;
        let count = 0;
        const node = new Node(n);
        if (this.createHeadIfNull(node)) return this;

        while (tempPtr.next !== null) {
            if (count === i) {
                const temp = tempPtr.next;
                temp.prev = node;
                node.next = temp;
                tempPtr.next = node;
                node.prev = tempPtr;
                this.size += 1;
                return this;
            }
            tempPtr = tempPtr.next;
            count += 1;
        }
        this.append(n);
    }

    remove(i) {
        let tempPtr = this.head;
        let count = 0;

        while (tempPtr.next !== null) {
            if (i === count) {
                const temp = tempPtr.next;
                tempPtr.next = temp.next;
                temp.next.prev = tempPtr;
                this.size -= 1;
                return this;
            }
            tempPtr = tempPtr.next;
            count += 1;
        }
        // tempPtr = null;
        // this.tail = null;
        // this.size -= 1;
    }
}

const ll = new DoublyLinkedList();
ll.append(100);
ll.append(50);
ll.append(25);
ll.append(12);
ll.append(6);
ll.append(3);
ll.insert(2, 20);
ll.insert(4, 8);
ll.insert(7, 1);
ll.remove(3);
ll.display();