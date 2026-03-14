// 635 - Design Log Storage System

class LogSystem {
    constructor() {
        this.logs = {};
        this.dict = {
            Year: 4, Month: 7, Day: 10,
            Hour: 13, Minute: 16, Second: 19,
        };
    }
    put(id, timestamp) {
        this.logs[id] ??= new Set();
        this.logs[id].add(timestamp);
    }
    retrieve(start, end, granularity) {
        granularity = this.dict[granularity];
        start = start.slice(0, granularity);
        end = end.slice(0, granularity);
        const res = [];
        for (const id in this.logs) {
            const timestamps = this.logs[id];
            for (const timestamp of timestamps) {
                const log = timestamp.slice(0, granularity);
                if (start <= log && log <= end) res.push(id);
            }
        }
        return res;
    }
}
