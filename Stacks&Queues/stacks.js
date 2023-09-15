class Stack {
    constructor(){
        this.elements = []
    }

    push(data){
        this.elements.push(data)
    }

    pop(){
        return this.elements.pop()
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.pop();
stack.pop();
console.log(stack.elements);