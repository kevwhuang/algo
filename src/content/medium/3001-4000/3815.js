// 3815 - Design Auction System

class AuctionSystem {
    constructor() {
        this.fn = (a, b) => b[1] - a[1] || b[0] - a[0];
        this.map1 = new Map();
        this.map2 = new Map();
    }
    addBid(userId, itemId, bidAmount) {
        const map1 = this.map1, map2 = this.map2;
        if (!map1.has(itemId)) map1.set(itemId, new Map());
        map1.get(itemId).set(userId, bidAmount);
        if (!map2.has(itemId)) map2.set(itemId, new PriorityQueue(this.fn));
        map2.get(itemId).enqueue([userId, bidAmount]);
    }
    getHighestBidder(itemId) {
        const map = this.map1.get(itemId), pq = this.map2.get(itemId);
        if (!pq) return -1;
        while (pq.size()) {
            const a = pq.front()[0], b = pq.front()[1];
            if (map.get(a) === b) return a;
            pq.dequeue();
        }
        return -1;
    }
    removeBid(userId, itemId) {
        this.map1.get(itemId).set(userId, 0);
    }
    updateBid(userId, itemId, newAmount) {
        this.map1.get(itemId).set(userId, newAmount);
        this.map2.get(itemId).enqueue([userId, newAmount]);
    }
}
