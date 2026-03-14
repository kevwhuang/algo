// 2619 - Array Prototype Last

Array.prototype.last = function () {
    return this.length ? this.at(-1) : -1;
};
