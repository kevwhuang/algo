// 1279 - Traffic Light Controlled Intersection

class TrafficLight {
    private int cur = 1;
    public void carArrived(
        int carId,
        int roadId,
        int direction,
        Runnable turnGreen,
        Runnable crossCar
    ) {
        synchronized(this) {
            if (this.cur != roadId) {
                turnGreen.run();
                this.cur = roadId;
            }
            crossCar.run();
        }
    }
}
