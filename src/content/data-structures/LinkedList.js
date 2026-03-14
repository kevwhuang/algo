class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    get(idx) {
        if (idx >= this.size) return null;
        let res = this.head;
        while (idx--) res = res.next;
        return res;
    }
    insert(idx, val) {
        if (idx > this.size) return null;
        if (idx === 0) return this.unshift(val);
        if (idx === this.size) return this.push(val);
        const res = new Node(val);
        const prev = this.get(idx - 1);
        res.next = prev.next;
        prev.next = res;
        this.size++;
        return res;
    }
    pop() {
        if (!this.head) return null;
        const res = this.tail;
        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            let node = this.head;
            while (node.next.next) node = node.next;
            node.next = null;
            this.tail = node;
        }
        this.size--;
        return res;
    }
    push(val) {
        const res = new Node(val);
        if (this.head) this.tail = this.tail.next = res;
        else this.head = this.tail = res;
        this.size++;
        return res;
    }
    remove(idx) {
        if (idx >= this.size) return null;
        if (idx === 0) return this.shift();
        if (idx === this.size - 1) return this.pop();
        const prev = this.get(idx - 1);
        const res = prev.next;
        prev.next = res.next;
        this.size--;
        return res;
    }
    set(idx, val) {
        const res = this.get(idx);
        if (!res) return null;
        res.val = val;
        return res;
    }
    shift() {
        if (!this.head) return null;
        const res = this.head;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
        return res;
    }
    unshift(val) {
        if (!this.head) return this.push(val);
        const res = new Node(val);
        res.next = this.head;
        this.head = res;
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

module.exports = LinkedList;
