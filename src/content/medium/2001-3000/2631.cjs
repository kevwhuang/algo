// 2631 - Group By

Array.prototype.groupBy = function (fn) {
    const res = {};
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        res[key] ??= [];
        res[key].push(this[i]);
    }
    return res;
};
