// 3709 - Design Exam Scores Tracker

class ExamTracker {
    constructor() {
        this.arr = [0];
        this.ps = [0];
    }
    record(time, score) {
        this.arr.push(time);
        this.ps.push(this.ps.at(-1) + score);
    }
    totalScore(startTime, endTime) {
        let l1 = 0, r1 = this.ps.length - 1;
        while (l1 <= r1) {
            const m = l1 + r1 >> 1;
            if (this.arr[m] < startTime) l1 = m + 1;
            else r1 = m - 1;
        }
        let l2 = 0, r2 = this.ps.length - 1;
        while (l2 <= r2) {
            const m = l2 + r2 >> 1;
            if (this.arr[m] <= endTime) l2 = m + 1;
            else r2 = m - 1;
        }
        return l1 <= r2 ? this.ps[r2] - this.ps[l1 - 1] : 0;
    }
}
