// 1396 - Design Underground System

class UndergroundSystem {
    constructor() {
        this.map1 = new Map();
        this.map2 = new Map();
    }
    checkIn(id, stationName, t) {
        this.map1.set(id, [stationName, t]);
    }
    checkOut(id, stationName, t) {
        const origin = this.map1.get(id);
        this.map1.delete(id);
        if (!this.map2.get(origin[0])) this.map2.set(origin[0], new Map());
        const dest = this.map2.get(origin[0]);
        dest.set(stationName, [
            (dest.get(stationName)?.[0] || 0) + 1,
            (dest.get(stationName)?.[1] || 0) + t - origin[1],
        ]);
    }
    getAverageTime(startStation, endStation) {
        const cur = this.map2.get(startStation).get(endStation);
        return cur[1] / cur[0];
    }
}
