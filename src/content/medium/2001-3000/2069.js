// 2069 - Walking Robot Simulation II

class Robot {
    constructor(width, height) {
        this.x = 0;
        this.y = 0;
        this.dir = 0;
        this.width = width - 1;
        this.height = height - 1;
        this.mod = 2 * (this.width + this.height);
        this.labels = ['East', 'North', 'West', 'South'];
    }
    getDir() {
        return this.labels[this.dir];
    }
    getPos() {
        return [this.x, this.y];
    }
    step(num) {
        num %= this.mod;
        if (!num && !this.x && !this.y) return this.dir = 3;
        let dist;
        while (num) {
            switch (this.dir) {
                case 0:
                    dist = Math.min(this.width - this.x, num);
                    this.x += dist;
                    num -= dist;
                    if (num && this.x === this.width) this.dir = 1;
                    break;
                case 1:
                    dist = Math.min(this.height - this.y, num);
                    this.y += dist;
                    num -= dist;
                    if (num && this.y === this.height) this.dir = 2;
                    break;
                case 2:
                    dist = Math.min(this.x, num);
                    this.x -= dist;
                    num -= dist;
                    if (num && !this.x) this.dir = 3;
                    break;
                default:
                    dist = Math.min(this.y, num);
                    this.y -= dist;
                    num -= dist;
                    if (num && !this.y) this.dir = 0;
            }
        }
    }
}
