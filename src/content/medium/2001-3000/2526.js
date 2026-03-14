// 2526 - Find Consecutive Integers From a Data Stream

class DataStream {
    constructor(value, k) {
        this.value = value;
        this.k = k;
        this.matches = 0;
    }
    consec(num) {
        if (num === this.value) this.matches++;
        else this.matches = 0;
        return this.matches >= this.k;
    }
}
