// 1603 - Design Parking System

class ParkingSystem {
    constructor(big, medium, small) {
        this.spots = [big, medium, small];
    }
    addCar(carType) {
        return this.spots[carType - 1]-- > 0;
    }
}
