
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const removeNthFromEnd = function (head, n) {
    let temp = head;
    let temp2 = head;
    let count = 0;
    debugger;

    while (temp.next !== null) {
        if (count >= n) {
            temp2 = temp2.next;
        }
        temp = temp.next;
        count += 1;
    }

    let temp3 = temp2.next;
    if (temp3 && count + 1 > n) {
        temp2.next = temp3.next;
    } else {
        if (count <= n) {
            head = head.next;
        } else {
            head.next = null;
        }
    }

    return head;
};

const linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(JSON.stringify(removeNthFromEnd(linkedList, 2)))