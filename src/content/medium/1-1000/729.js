// 729 - My Calendar I

class MyCalendar {
    constructor() {
        this.calendar = [];
    }
    book(start, end) {
        const calendar = this.calendar;
        let l = 0, r = calendar.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (start > calendar[m][0]) l = m + 1;
            else r = m - 1;
        }
        if (l && start < calendar[l - 1][1]) return false;
        if (l < calendar.length && end > calendar[l][0]) return false;
        calendar.splice(l, 0, [start, end]);
        return true;
    }
}
