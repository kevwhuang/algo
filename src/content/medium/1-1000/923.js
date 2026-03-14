// 923 - 3Sum With Multiplicity

function threeSumMulti(arr, target) {
    const freqs = new Uint16Array(101);
    for (let i = 0; i < arr.length; i++) {
        freqs[arr[i]]++;
    }
    let tuples = 0;
    const mod = 1e9 + 7, third = target / 3;
    for (let i = Math.min(100, target); i >= third; i--) {
        const diff = target - i, half = diff / 2;
        for (let j = Math.min(i, diff); j >= half; j--) {
            const k = diff - j;
            const ii = freqs[i], jj = freqs[j], kk = freqs[k];
            let count;
            if (i === k) count = ii * (ii - 1) * (ii - 2) / 6;
            else if (i === j) count = ii * (ii - 1) * kk / 2;
            else if (j === k) count = jj * (jj - 1) * ii / 2;
            else count = ii * jj * kk;
            tuples = (tuples + count) % mod;
        }
    }
    return tuples;
}
