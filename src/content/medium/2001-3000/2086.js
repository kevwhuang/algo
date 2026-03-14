// 2086 - Minimum Number of Food Buckets to Feed the Hamsters

function minimumBuckets(hamsters) {
    let food = 0, i = 0;
    const A = hamsters, n = A.length;
    while (i < n) {
        if (A[i] === '.' && ++i) continue;
        food++;
        if (i < n - 2 && A[i + 1] === '.' && A[i + 2] === 'H') i += 3;
        else if (i < n - 1 && A[i + 1] === '.') i += 2;
        else if (i && A[i - 1] === '.') i++;
        else return -1;
    }
    return food;
}
