class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    get(idx) {
        if (idx >= this.size) return null;
        let res = idx < this.size / 2 ? this.head : this.tail;
        if (res === this.head) while (idx--) res = res.next;
        else while (++idx < this.size) res = res.prev;
        return res;
    }
    insert(idx, val) {
        if (idx > this.size) return null;
        if (idx === 0) return this.unshift(val);
        if (idx === this.size) return this.push(val);
        const res = new Node(val);
        const prev = this.get(idx - 1);
        res.prev = prev;
        res.next = prev.next;
        prev.next = prev.next.prev = res;
        this.size++;
        return res;
    }
    pop() {
        if (!this.head) return null;
        const res = this.tail;
        if (this.size === 1) this.head = this.tail = null;
        if (this.size > 1) this.tail = res.prev;
        if (this.size > 1) this.tail.next = null;
        this.size--;
        return res;
    }
    push(val) {
        const res = new Node(val);
        if (this.head) res.prev = this.tail;
        if (this.head) this.tail = this.tail.next = res;
        else this.head = this.tail = res;
        this.size++;
        return res;
    }
    remove(idx) {
        if (idx >= this.size) return null;
        if (idx === 0) return this.shift();
        if (idx === this.size - 1) return this.pop();
        const res = this.get(idx);
        res.prev.next = res.next;
        res.next.prev = res.prev;
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
        if (this.head) this.head.prev = null;
        else this.tail = null;
        this.size--;
        return res;
    }
    unshift(val) {
        if (!this.head) return this.push(val);
        const res = new Node(val);
        res.next = this.head;
        this.head = this.head.prev = res;
        this.size++;
        return res;
    }
}

class Node {
    constructor(val) {
        this.val = val ?? null;
        this.prev = null;
        this.next = null;
    }
}

module.exports = DoublyLinkedList;
