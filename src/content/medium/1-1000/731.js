// 731 - My Calendar II

class MyCalendarTwo {
    constructor() {
        this.calendar = [];
        this.overlap = [];
    }
    book(start, end) {
        end--;
        for (let i = 0; i < this.overlap.length; i++) {
            if (start > this.overlap[i][1]) continue;
            if (end < this.overlap[i][0]) continue;
            return false;
        }
        for (let i = 0; i < this.calendar.length; i++) {
            if (start > this.calendar[i][1]) continue;
            if (end < this.calendar[i][0]) continue;
            const left = Math.max(start, this.calendar[i][0]);
            const right = Math.min(end, this.calendar[i][1]);
            this.overlap.push([left, right]);
        }
        this.calendar.push([start, end]);
        return true;
    }
}
