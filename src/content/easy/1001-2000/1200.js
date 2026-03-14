// 1200 - Minimum Absolute Difference

function minimumAbsDifference(arr) {
    arr = new Int32Array(arr).sort();
    let res = [], min = Infinity;
    for (let i = 1; i < arr.length; i++) {
        const d = arr[i] - arr[i - 1];
        if (d > min) continue;
        if (d < min) res = [];
        res.push([arr[i - 1], arr[i]]);
        min = d;
    }
    return res;
}
