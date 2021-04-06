const a = { val: 1 }
const b = { val: 2 }
const c = { val: 3 }
const d = { val: 4 }

a.next = b;
b.next = c;
c.next = d;

const deleteprops = (value) => {
    let p = a;
    while (p && p.next) {
        if (p.next.val === value) p.next = p.next.next;
        p = p.next;
    }

}

deleteprops(3);
let p = a;
while (p) {
    console.log(p.val);
    p = p.next;
}