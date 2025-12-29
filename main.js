import LinkedList from "./script.js";

const ll = LinkedList();

ll.prepend(120);
ll.prepend(20);
ll.prepend(10);
ll.append(1000);
ll.append(100);
ll.append(1001);

console.log(ll.listSize());
console.log(ll.listHead());
console.log(ll.listTail());
console.log(ll.at(3));
console.log(ll.toString());
console.log(ll.pop());
console.log(ll.contains(120));
console.log(ll.findIndex(1000));

ll.insertAt(0, 2, 8);
ll.insertAt(2, 32, 28);
console.log(ll.listSize());
console.log(ll.toString());

ll.removeAt(1);
console.log(ll.listSize());
console.log(ll.toString());
