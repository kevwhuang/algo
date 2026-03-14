// 855 - Exam Room

class ExamRoom {
    constructor(n) {
        this.seats = [];
        this.n = n;
    }
    leave(p) {
        this.seats.splice(this.seats.indexOf(p), 1);
    }
    seat() {
        const seats = this.seats;
        if (!seats.length) return seats.push(0) - 1;
        let max = this.n - 1 - seats[seats.length - 1];
        max = Math.max(seats[0], max);
        for (let i = 1; i < seats.length; i++) {
            max = Math.max(seats[i] - seats[i - 1] >> 1, max);
        }
        if (seats[0] === max) {
            seats.unshift(0);
            return 0;
        }
        for (let i = 1; i < seats.length; i++) {
            if (seats[i] - seats[i - 1] >> 1 < max) continue;
            seats.splice(i, 0, seats[i] + seats[i - 1] >> 1);
            return seats[i];
        }
        seats.push(this.n - 1);
        return this.n - 1;
    }
}
