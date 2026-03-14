// 2821 - Delay the Resolution of Each Promise

function delayAll(functions, ms) {
    const res = new Array(functions.length);
    for (let i = 0; i < functions.length; i++) {
        const fn = res => setTimeout(() => res(functions[i]()), ms);
        res[i] = () => new Promise(fn);
    }
    return res;
}
