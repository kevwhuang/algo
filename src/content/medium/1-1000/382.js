// 382 - Linked List Random Node

class Solution {
    constructor(head) {
        this.vals = [];
        while (head) {
            this.vals.push(head.val);
            head = head.next;
        }
    }
    getRandom() {
        return this.vals[this.vals.length * Math.random() >> 0];
    }
}
