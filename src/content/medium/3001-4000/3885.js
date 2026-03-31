// 3885. Design Event Manager

class EventManager {
    constructor(events) {
        this.pq = new PriorityQueue((a, b) => b[1] - a[1] || a[0] - b[0]);
        this.map = new Map();
        for (let i = 0; i < events.length; i++) {
            this.pq.enqueue(events[i]);
            this.map.set(events[i][0], events[i][1]);
        }
    }
    pollHighest() {
        while (this.pq.size()) {
            const res = this.pq.front()[0];
            if (this.map.get(res) !== this.pq.dequeue()[1]) continue;
            this.map.set(res, null);
            return res;
        }
        return -1;
    }
    updatePriority(eventId, newPriority) {
        this.pq.enqueue([eventId, newPriority]);
        this.map.set(eventId, newPriority);
    }
}
