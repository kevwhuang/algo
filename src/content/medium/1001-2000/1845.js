// 1845 - Seat Reservation Manager

class SeatManager {
    constructor(n) {
        this.seats = [];
        this.next = 1;
    }
    reserve() {
        return this.seats[0] < this.next ? this.seats.shift() : this.next++;
    }
    unreserve(seatNumber) {
        let i = 0;
        while (i < this.seats.length && this.seats[i] < seatNumber) i++;
        this.seats.splice(i, 0, seatNumber);
    }
}
