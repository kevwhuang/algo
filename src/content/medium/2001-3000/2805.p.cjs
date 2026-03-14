// 2805 - Custom Interval

function customInterval(fn, delay, period) {
    function lazy(acc) {
        const sum = delay + period * acc;
        customInterval[res] = setTimeout(() => fn() || lazy(acc + 1), sum);
    }
    const res = Math.random();
    lazy(0);
    return res;
}

function customClearInterval(id) {
    clearTimeout(customInterval[id]);
}
