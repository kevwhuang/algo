// 2632 - Curry

function curry(fn) {
    function dfs() {
        arr.push(...arguments);
        return arr.length === fn.length ? fn(...arr) : dfs;
    }
    const arr = [];
    return dfs;
}
