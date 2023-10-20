const hasCycle = (head) => {
    let temp = head;
    let pos = 1;

    while (temp.next !== null){
        if (temp.pos){
            return true
        }
        temp.pos = pos;
    }
};