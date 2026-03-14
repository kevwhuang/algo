// 2636 - Promise Pool

function promisePool(functions, n) {
    const fn1 = e => e().then(fn2);
    const fn2 = () => functions[n++]?.().then(fn2);
    return Promise.all(functions.slice(0, n).map(fn1));
}
