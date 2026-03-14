// 2758 - Next Day

Date.prototype.nextDay = function () {
    return new Date(this.valueOf() + 86400000).toISOString().slice(0, 10);
};
