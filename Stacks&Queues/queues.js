// Implementing Queues using Arrays is BAD

class Queue {
    constructor() {
        this.elements = []
    }

    enqueue(data) {
        this.elements.push(data);
    }

    dequeue() {
        return this.elements.shift();
    }
}

const demo = () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);

    queue.dequeue();
    queue.dequeue();

    console.log(queue.elements);
}