// 707 - Design Linked List

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addAtHead(val) {
        if (!this.head) return this.addAtTail(val);
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    addAtIndex(index, val) {
        if (index > this.size) return;
        if (index === 0) return this.addAtHead(val);
        if (index === this.size) return this.addAtTail(val);
        const node = new ListNode(val);
        const prev = this.#getNode(index - 1);
        node.next = prev.next;
        prev.next = node;
        this.size++;
    }
    addAtTail(val) {
        if (this.head) this.tail = this.tail.next = new ListNode(val);
        else this.head = this.tail = new ListNode(val);
        this.size++;
    }
    deleteAtIndex(index) {
        if (index >= this.size) return;
        if (index === 0) return this.#shift();
        if (index === this.size - 1) return this.#pop();
        const prev = this.#getNode(index - 1);
        const res = prev.next;
        prev.next = res.next;
        this.size--;
    }
    get(index) {
        if (index >= this.size) return -1;
        let node = this.head;
        while (index--) node = node.next;
        return node.val;
    }
    #getNode(index) {
        let node = this.head;
        while (index--) node = node.next;
        return node;
    }
    #pop() {
        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            let node = this.head;
            while (node.next.next) node = node.next;
            node.next = null;
            this.tail = node;
        }
        this.size--;
    }
    #shift() {
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
    }
}
