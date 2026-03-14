// 3476 - Maximize Profit From Task Assignment

function maxProfit(workers, tasks) {
    const arr = new Uint32Array(workers).sort();
    const M = tasks.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    const m = arr.length, n = M.length;
    let res = 0, max = 0, i = 0, j = 0;
    while (i < m && j < n) {
        const a = arr[i], b = M[j][0], c = M[j][1];
        if (a === b) res += c, i++, j++;
        else if (a < b) i++;
        else max = Math.max(c, max), j++;
    }
    while (j < n) max = Math.max(M[j++][1], max);
    return res + max;
}
