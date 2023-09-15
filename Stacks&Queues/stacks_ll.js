import { LinkedList } from '../LinkedList/LL.js';

class Stack {
    constructor() {
        this.elements = new LinkedList();
    }

    push(data) {
        this.elements.append(data)
    }

    pop() {
        return this.elements.remove(this.elements.size - 2)
    }
}

const test = () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    stack.pop();
    stack.pop();
    stack.elements.display();
}