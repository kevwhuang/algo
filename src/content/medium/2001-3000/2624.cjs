// 2624 - Snail Traversal

Array.prototype.snail = function (rowsCount, colsCount) {
    const n = rowsCount;
    if (n * colsCount !== this.length) return [];
    const res = Array.from({ length: n }, () => []);
    for (let i = 0, c = 0; i < this.length; c = i += n) {
        let r = res[0].length & 1 ? n - 1 : 0;
        const d = r ? -1 : 1;
        while (~r && r < n) res[r].push(this[c++]) && (r += d);
    }
    return res;
};
