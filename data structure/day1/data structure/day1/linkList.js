const a = { val: 1 };
const b = { val: 2 };
const c = { val: 3 };
const d = { val: 4 };

a.next = b;
b.next = c;
c.next = d;

let p = a;
while (p) {
    console.log(p.val);
    p = p.next
}



