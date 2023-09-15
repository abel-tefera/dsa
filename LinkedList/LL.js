class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    display() {
        let tempPtr = this.head;
        while (tempPtr !== null) {
            process.stdout.write(`${tempPtr.data} -> `);
            tempPtr = tempPtr.next;
        }
        console.log(`\nSize: ${this.size}`)
    }

    createHeadIfNull(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            node.next = null;
            this.size += 1;
            return true;
        }
    }

    append(n) {
        const node = new Node(n);
        if (this.createHeadIfNull(node)) return this;

        this.tail.next = node;
        this.tail = node;
        node.next = null;
        this.size += 1;
        return this;
    }

    prepend(n) {
        const node = new Node(n);
        if (this.createHeadIfNull(node)) return this;

        node.next = this.head;
        this.head = node;
        this.size += 1;
        return this;
    }

    insert(i, n) {
        let tempPtr = this.head;
        let count = 0;
        while (tempPtr.next !== null) {
            if (count === i) {
                const node = new Node(n);
                const temp = tempPtr.next
                node.next = temp;
                tempPtr.next = node;
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

const ll = new LinkedList();
ll.append(10);
ll.append(5);
ll.append(2);
ll.append(1);
ll.prepend(20);
ll.prepend(40);
ll.prepend(80);
ll.insert(0, 60);
ll.insert(2, 30);
ll.insert(4, 15);
ll.insert(1000, 0);
ll.display();
ll.remove(9);
ll.display();