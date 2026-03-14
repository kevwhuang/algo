// 308 - Range Sum Query 2D - Mutable

class NumMatrix {
    constructor(matrix) {
        this.M = matrix;
        this.tree = new Array(matrix.length);
        this.n = matrix[0].length + 1;
        this.#init();
    }
    sumRegion(row1, col1, row2, col2) {
        let res = 0;
        for (let r = row1; r <= row2; r++) {
            const arr = this.tree[r];
            for (let c = col2 + 1; c; c -= c & -c) {
                res += arr[c];
            }
            for (let c = col1; c; c -= c & -c) {
                res -= arr[c];
            }
        }
        return res;
    }
    update(row, col, val) {
        const arr = this.tree[row], d = val - this.M[row][col];
        for (let i = col + 1; i < this.n; i += i & -i) {
            arr[i] += d;
        }
        this.M[row][col] = val;
    }
    #init() {
        for (let i = 0; i < this.M.length; i++) {
            const arr = new Int32Array(this.n);
            this.M[i].forEach((e, i) => arr[i + 1] = e);
            for (let j = 1; j < this.n; j++) {
                const p = j + (j & -j);
                if (p >= this.n) continue;
                arr[p] += arr[j];
            }
            this.tree[i] = arr;
        }
    }
}
