// 3829 - Design Ride Sharing System

class RideSharingSystem {
    constructor() {
        this.set = new Set();
        this.Q1 = [];
        this.Q2 = [];
        this.l1 = 0;
        this.l2 = 0;
        this.r1 = 0;
        this.r2 = 0;
    }
    addDriver(driverId) {
        this.Q1[this.r1++] = driverId;
    }
    addRider(riderId) {
        this.set.add(riderId);
        this.Q2[this.r2++] = riderId;
    }
    cancelRider(riderId) {
        this.set.delete(riderId);
    }
    matchDriverWithRider() {
        while (this.l2 < this.r2 && !this.set.has(this.Q2[this.l2])) this.l2++;
        if (this.l1 === this.r1 || this.l2 === this.r2) return [-1, -1];
        return [this.Q1[this.l1++], this.Q2[this.l2++]];
    }
}
