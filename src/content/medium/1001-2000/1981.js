// 1981 - Minimize the Difference Between Target and Chosen Elements

function minimizeTheDifference(mat, target) {
    let set = new Set([0]);
    const m = mat.length, n = mat[0].length;
    for (let r = 0; r < m; r++) {
        const N = new Set();
        const arr = new Uint8Array(mat[r]).sort();
        for (const e of set) {
            for (let c = 0; c < n; c++) {
                const sum = arr[c] + e;
                N.add(sum);
                if (sum >= target) break;
            }
        }
        set = N;
    }
    let res = Infinity;
    set.forEach(e => res = Math.min(Math.abs(e - target), res));
    return res;
}
