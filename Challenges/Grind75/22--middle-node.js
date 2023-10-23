const middleNode = (head) => {
    let temp = head;
    let mid = head;
    let count = 1;

    while (temp && temp.next) {
        temp = temp.next;
        count += 1;
        if (count % 2 === 0){
            mid = mid.next;
        }
    }

    return mid;
};