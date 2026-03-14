// 118 - Pascal's Triangle

function generate(numRows) {
    const res = [[1]];
    while (--numRows) {
        const prev = res.at(-1), n = prev.length;
        const arr = new Uint32Array(n + 1);
        for (let i = 1; i < n; i++) {
            arr[i] = prev[i - 1] + prev[i];
        }
        arr[0] = arr[n] = 1;
        res.push(arr);
    }
    return res;
}
