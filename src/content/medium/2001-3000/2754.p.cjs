// 2754 - Bind Function to Context

Function.prototype.bindPolyfill = function (obj) {
    return (...args) => this.call(obj, ...args);
};
