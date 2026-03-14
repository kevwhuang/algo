// 3391 - Design a 3D Binary Matrix With Efficient Layer Tracking

class Matrix3D {
    constructor(n) {
        this.arr = Array.from({ length: n }, () => new Set());
    }
    largestMatrix() {
        let res = 0;
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i].size >= this.arr[res].size) res = i;
        }
        return res;
    }
    setCell(x, y, z) {
        this.arr[x].add(1000 * y + z);
    }
    unsetCell(x, y, z) {
        this.arr[x].delete(1000 * y + z);
    }
}
