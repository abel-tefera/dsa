function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const mergeTwoLists = function (list1, list2) {
    let temp1 = list1
    let temp2 = list2;

    let res = null;
    let temp3 = res;

    while (temp1 !== null && temp2 !== null) {
        if (temp1.val > temp2.val) {
            if (!res) {
                res = new ListNode(temp2.val, null);
                temp3 = res;
            } else {
                const newNode = new ListNode(temp2.val, null)
                temp3.next = newNode;
                temp3 = temp3.next;

            }
            temp2 = temp2.next;
        } else {
            if (!res) {
                res = new ListNode(temp1.val, null);
                temp3 = res;
            } else {
                const newNode = new ListNode(temp1.val, null);
                temp3.next = newNode;
                temp3 = temp3.next;

            }
            temp1 = temp1.next;
        }
    }

    if (temp1 === null && temp2 === null) {
        return res;
    } else if (temp1 === null) {
        if (temp3) {
            temp3.next = temp2;
        } else {
            temp3 = new ListNode(temp2.val, temp2.next)
            return temp3;
        }
    } else if (temp2 === null) {
        if (temp3) {
            temp3.next = temp1;

        } else {
            temp3 = new ListNode(temp1.val, temp1.next)
            return temp3;
        }
    }

    return res;
};

// const listNode1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
// const listNode2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

const listNode1 = null;
const listNode2 = new ListNode(0);
