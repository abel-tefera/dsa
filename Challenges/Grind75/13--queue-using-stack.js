// My Impl
class MyQueue {
    constructor(){
        this.queue = [];
    }

    push(x){
        this.queue.push(x);
    }

    pop(){
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    empty(){
        return this.queue === 0
    }
};

// Proto

const MyQueueProto = function () {
    this.firstStack = []
    this.secondStack = []
  }
  
  MyQueueProto.prototype.push = function (x) {
    this.firstStack.push(x)
  }
  
  MyQueueProto.prototype.pop = function () {
    this._prepare()
    return this.secondStack.pop()
  }
  
  MyQueueProto.prototype.peek = function () {
    this._prepare()
    return this.secondStack[this.secondStack.length - 1]
  }
  
  MyQueueProto.prototype.empty = function () {
    return this.firstStack.length === 0 && this.secondStack.length === 0
  }
  
  MyQueueProto.prototype._prepare = function () {
    if (this.secondStack.length === 0)
      while (this.firstStack.length > 0)
        this.secondStack.push(this.firstStack.pop())
  }


var obj = new MyQueueProto()
obj.push(10);
obj.push(20)
obj.push(30)
obj.push(40)

debugger;
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()
