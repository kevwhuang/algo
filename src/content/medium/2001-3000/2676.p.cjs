// 2676 - Throttle

function throttle(fn, t) {
    function dfs() {
        if (key) return prev = arguments;
        fn(...arguments);
        key = setTimeout(() => {
            key = null;
            if (prev) dfs(...prev) || (prev = null);
        }, t);
    }
    let key, prev;
    return dfs;
}
