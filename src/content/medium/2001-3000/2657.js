// 2657 - Find the Prefix Common Array of Two Arrays

function findThePrefixCommonArray(A, B) {
    const res = new Uint8Array(A.length), set = new Set();
    for (let i = 0, count = 0; i < A.length; i++) {
        if (set.has(A[i])) count++;
        set.add(A[i]);
        if (set.has(B[i])) count++;
        set.add(B[i]);
        res[i] = count;
    }
    return res;
}
