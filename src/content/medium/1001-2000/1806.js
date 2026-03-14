// 1806 - Minimum Number of Operations to Reinitialize a Permutation

function reinitializePermutation(n) {
    let perm = new Array(n);
    for (let i = 0; i < n; i++) {
        perm[i] = i;
    }
    let ops = 0;
    while (true) {
        const arr = new Array(n);
        let isInitial = true;
        for (let i = 0; i < n; i++) {
            if (i % 2) arr[i] = perm[n / 2 + (i - 1) / 2];
            else arr[i] = perm[i / 2];
            if (arr[i] !== i) isInitial = false;
        }
        perm = arr;
        ops++;
        if (isInitial) return ops;
    }
}
