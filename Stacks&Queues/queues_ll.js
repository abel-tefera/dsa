import { LinkedList } from '../LinkedList/LL.js';

class Queue {
    constructor(){
        this.elements = new LinkedList();
    }

    enqueue(data) {
        this.elements.append(data);
    }

    dequeue() {
        return this.elements.remove(0)
    }
}

const test = () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);

    queue.dequeue();
    queue.dequeue();

    console.log(queue.elements.display());
}

test();