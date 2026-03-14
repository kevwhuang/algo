// 2034 - Stock Price Fluctuation

class StockPrice {
    constructor() {
        this.map = new Map();
        this.arr = [0, null];
        this.pq1 = new PriorityQueue({ compare: (a, b) => b[1] - a[1] });
        this.pq2 = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    }
    current() {
        return this.arr[1];
    }
    maximum() {
        return this.pq1.front()[1];
    }
    minimum() {
        return this.pq2.front()[1];
    }
    update(timestamp, price) {
        if (timestamp >= this.arr[0]) this.arr = [timestamp, price];
        const map = this.map, pq1 = this.pq1, pq2 = this.pq2;
        map.set(timestamp, price);
        pq1.enqueue([timestamp, price]);
        while (map.get(pq1.front()[0]) !== pq1.front()[1]) pq1.dequeue();
        pq2.enqueue([timestamp, price]);
        while (map.get(pq2.front()[0]) !== pq2.front()[1]) pq2.dequeue();
    }
}
