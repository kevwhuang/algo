// 478 - Generate Random Point in a Circle

class Solution {
    constructor(radius, x_center, y_center) {
        this.x = x_center;
        this.y = y_center;
        this.radius = radius;
    }
    randPoint() {
        const dist = this.radius * Math.sqrt(Math.random());
        const angle = 2 * Math.PI * Math.random();
        const x = this.x + dist * Math.cos(angle);
        const y = this.y + dist * Math.sin(angle);
        return [x, y];
    }
}
