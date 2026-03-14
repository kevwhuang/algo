class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    pop() {
        if (!this.head) return null;
        const res = this.head;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
        return res;
    }
    push(val) {
        const res = new Node(val);
        res.next = this.head;
        if (this.head) this.head = res;
        else this.head = this.tail = res;
        this.size++;
        return res;
    }
}

class Node {
    constructor(val) {
        this.val = val ?? null;
        this.next = null;
    }
}

module.exports = Stack;
