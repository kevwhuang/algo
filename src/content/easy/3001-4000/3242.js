// 3242 - Design Neighbor Sum Service

class NeighborSum {
    constructor(grid) {
        this.grid = grid;
        this.m = grid.length;
        this.n = grid[0].length;
        this.rows = new Uint8Array(this.m ** 2);
        this.cols = new Uint8Array(this.m ** 2);
        for (let r = 0; r < this.m; r++) {
            for (let c = 0; c < this.n; c++) {
                this.rows[grid[r][c]] = r;
                this.cols[grid[r][c]] = c;
            }
        }
    }
    adjacentSum(value) {
        let sum = 0;
        const r = this.rows[value], c = this.cols[value];
        if (r) sum += this.grid[r - 1][c];
        if (r + 1 < this.m) sum += this.grid[r + 1][c];
        if (c) sum += this.grid[r][c - 1];
        if (c + 1 < this.n) sum += this.grid[r][c + 1];
        return sum;
    }
    diagonalSum(value) {
        let sum = 0;
        const r = this.rows[value], c = this.cols[value];
        if (r && c) sum += this.grid[r - 1][c - 1];
        if (r && c + 1 < this.n) sum += this.grid[r - 1][c + 1];
        if (r + 1 < this.m && c) sum += this.grid[r + 1][c - 1];
        if (r + 1 < this.m && c + 1 < this.n) sum += this.grid[r + 1][c + 1];
        return sum;
    }
}
