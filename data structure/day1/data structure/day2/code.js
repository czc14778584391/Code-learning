var addTwoNumbers = function (l1, l2) {
    let p3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let carry = 0;
    while (p1 || p2) {
        const v1 = p1.val ? p1.val : 0;
        const v2 = p2.val ? p2.val : 0;
        let result = v1 + v2 + carry
        carry = Math.floor(result / 10);
        p3.next = new ListNode(result % 10);
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        p3=p3.next;
    }
    return p3.next;
};