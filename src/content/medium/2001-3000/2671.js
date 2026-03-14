// 2671 - Frequency Tracker

class FrequencyTracker {
    constructor() {
        this.nums = {};
        this.freqs = {};
    }
    add(number) {
        this.nums[number] ??= 0;
        let freq = ++this.nums[number];
        this.freqs[freq] = (this.freqs[freq] ?? 0) + 1;
        this.freqs[freq - 1]--;
    }
    deleteOne(number) {
        if (!this.nums[number]) return;
        let freq = this.nums[number]--;
        this.freqs[freq]--;
        this.freqs[freq - 1]++;
    }
    hasFrequency(frequency) {
        return Boolean(this.freqs[frequency]);
    }
}
