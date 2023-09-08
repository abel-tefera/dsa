class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    set(key, val) {
        const hashKey = this._hash(key);
        if (!this.data[hashKey]) this.data[hashKey] = [];
        this.data[hashKey].push([key, val])
        // console.log(this.data);
    }

    get(key) {
        return this.data.filter((_, index) => index === this._hash(key)).map(([[_, val]]) => val)[0];
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    keys() {
        return this.data.filter(k => k).map(([[key, _]]) => key)
    }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.set('oranges', 25);
myHashTable.set('apples', 5000);
myHashTable.set('potatoes', 50);
myHashTable.set('tomatoes', 2000);
myHashTable.set('carrots', 3500);
myHashTable.set('strawberries', 15);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('oranges'));
console.log(myHashTable.get('apples')); 
console.log(myHashTable.get('potatoes')); 
console.log(myHashTable.get('tomatoes')); 
console.log(myHashTable.get('carrots')); 
console.log(myHashTable.get('strawberries')); 

console.log(myHashTable.keys());