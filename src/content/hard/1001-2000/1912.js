// 1912 - Design Movie Rental System

class MovieRentingSystem {
    constructor(n, entries) {
        this.fn = (a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
        this.pq = new PriorityQueue(this.fn);
        this.dict = new Map();
        this.map = new Map();
        this.set = new Set();
        this.#init(entries);
    }
    drop(shop, movie) {
        const key = 100000 * shop + movie;
        this.map.get(movie).enqueue([this.dict.get(key), shop]);
        this.set.delete(key);
    }
    rent(shop, movie) {
        const key = 100000 * shop + movie;
        this.pq.enqueue([this.dict.get(key), shop, movie]);
        this.set.add(key);
    }
    report() {
        const seen = new Set(), pq = this.pq;
        while (seen.size < 5 && pq.size()) {
            const key = 100000 * pq.front()[1] + pq.dequeue()[2];
            if (!seen.has(key) && this.set.has(key)) seen.add(key);
        }
        const res = [];
        for (const key of seen) {
            const a = key / 100000 >> 0, b = key % 100000;
            res.push([a, b]);
            pq.enqueue([this.dict.get(key), a, b]);
        }
        return res;
    }
    search(movie) {
        if (!this.map.has(movie)) return [];
        const seen = new Set(), pq = this.map.get(movie);
        while (seen.size < 5 && pq.size()) {
            const key1 = pq.dequeue()[1], key2 = 100000 * key1 + movie;
            if (!seen.has(key1) && !this.set.has(key2)) seen.add(key1);
        }
        const res = [];
        for (const key of seen) {
            res.push(key);
            pq.enqueue([this.dict.get(100000 * key + movie), key]);
        }
        return res;
    }
    #init(entries) {
        for (let i = 0; i < entries.length; i++) {
            const a = entries[i][0], b = entries[i][1], c = entries[i][2];
            this.dict.set(100000 * a + b, c);
            if (!this.map.has(b)) this.map.set(b, new PriorityQueue(this.fn));
            this.map.get(b).enqueue([c, a]);
        }
    }
}
