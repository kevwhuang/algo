// 622 - Design Circular Queue

class MyCircularQueue {
    constructor(k) {
        this.first = null;
        this.last = null;
        this.size = 0;
        this.k = k;
    }
    Front() {
        return this.size ? this.first.val : -1;
    }
    Rear() {
        return this.size ? this.last.val : -1;
    }
    deQueue() {
        if (this.size === 0) return false;
        this.first = this.first.next;
        this.size--;
        if (!this.first) this.last = null;
        return true;
    }
    enQueue(value) {
        if (this.size >= this.k) return false;
        const node = new ListNode(value);
        if (this.first) {
            this.last.next = node;
            this.last = node;
        } else {
            this.first = node;
            this.last = this.first;
        }
        this.size++;
        return true;
    }
    isEmpty() {
        return this.size === 0;
    }
    isFull() {
        return this.size === this.k;
    }
}
