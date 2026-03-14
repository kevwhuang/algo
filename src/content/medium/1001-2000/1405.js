// 1405 - Longest Happy String

function longestDiverseString(a, b, c) {
    let res = '';
    const arr = [['a', a], ['b', b], ['c', c]];
    const sum = a + b + c;
    while (res.length < sum) {
        let cur = arr.sort((a, b) => b[1] - a[1])[0];
        if (res.at(-1) === cur[0]) {
            if (res.at(-1) === res.at(-2)) cur = arr[1];
        }
        if (cur[1]-- === 0) break;
        res += cur[0];
    }
    return res;
}
