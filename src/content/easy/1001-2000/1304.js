// 1304 - Find N Unique Integers Sum up to Zero

function sumZero(n) {
    const arr = [];
    for (let i = 1; i < n; i++) {
        arr.push(i);
    }
    arr.push(n * (n - 1) / -2);
    return arr;
}
