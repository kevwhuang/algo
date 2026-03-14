// 933 - Number of Recent Calls

class RecentCounter {
    constructor() {
        this.stream = [];
    }
    ping(t) {
        this.stream.push(t);
        while (this.stream[0] < t - 3000) this.stream.shift();
        return this.stream.length;
    }
}
