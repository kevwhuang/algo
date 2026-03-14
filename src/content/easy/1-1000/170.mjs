// 170 - Two Sum III - Data Structure Design

class TwoSum {
    constructor() {
        this.B = new Map();
    }
    add(number) {
        this.B.set(number, (this.B.get(number) ?? 0) + 1);
    }
    find(value) {
        for (const e of this.B.keys()) {
            if (!this.B.has(value - e)) continue;
            if (value !== e + e || this.B.get(e) >= 2) return true;
        }
        return false;
    }
}
