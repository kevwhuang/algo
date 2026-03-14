class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    dequeue() {
        if (!this.head) return null;
        const res = this.head;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
        return res;
    }
    enqueue(val) {
        const res = new Node(val);
        if (this.head) this.tail = this.tail.next = res;
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

module.exports = Queue;
