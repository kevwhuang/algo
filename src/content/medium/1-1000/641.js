// 641 - Design Circular Deque

class MyCircularDeque {
    constructor(k) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.k = k;
    }
    deleteFront() {
        if (this.isEmpty()) return false;
        this.head = this.head.next;
        if (this.head === null) this.tail = null;
        this.length--;
        return true;
    }
    deleteLast() {
        if (this.isEmpty()) return false;
        if (this.length === 1) return this.deleteFront();
        let cur = this.head;
        while (cur.next.next) cur = cur.next;
        cur.next = null;
        this.tail = cur;
        this.length--;
        return true;
    }
    getFront() {
        return this.head ? this.head.val : -1;
    }
    getRear() {
        return this.tail ? this.tail.val : -1;
    }
    insertFront(value) {
        if (this.isFull()) return false;
        if (this.head === null) return this.insertLast(value);
        const node = new ListNode(value, this.head);
        this.head = node;
        this.length++;
        return true;
    }
    insertLast(value) {
        if (this.isFull()) return false;
        const node = new ListNode(value);
        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
        this.length++;
        return true;
    }
    isEmpty() {
        return this.length === 0;
    }
    isFull() {
        return this.length === this.k;
    }
}
