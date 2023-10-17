
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }

    let newLL = null;
    let pointer;
    let found = true;
    while (found) {
        found = false;
        let min = Number.POSITIVE_INFINITY;
        let current = 0;
        for (let i = 0; i < lists.length; i++) {
            if (!lists[i]) continue;
            if (lists[i].val <= min) {
                min = lists[i].val;
                current = i;
                found = true;
            }
        }
        if (found) {
            if (newLL !== null) {
                pointer.next = new ListNode(min);
                pointer = pointer.next;
            } else {
                newLL = new ListNode(min);
                pointer = newLL;
            }
            lists[current] = lists[current].next;

        }
    }
    return newLL;
};

// const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const l3 = new ListNode(2, new ListNode(6));

// const LL = [l1, l2, l3];

// console.log(mergeKLists(LL));