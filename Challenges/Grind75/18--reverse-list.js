function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Recursive Solution
const reverseListR = (head) => {
    if (head == null || head.next == null) return head;
    const res = reverseListR(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};

// Iterative solution
const reverseList = (head) => {
    let reversed = null;
    while (head !== null) {
        reversed = new ListNode(head.val, reversed);
        head = head.next;
    }
    return reversed;
}

// head = [1,2,3,4,5]
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))
debugger;
console.log(JSON.stringify(reverseList(head))) // [5,4,3,2,1]