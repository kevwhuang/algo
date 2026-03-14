// 3767 - Maximize Points After Choosing K Tasks

function maxPoints(technique1, technique2, k) {
    let res = 0, A3 = [];
    const A1 = technique1, A2 = technique2;
    for (let i = 0; i < A1.length; i++) {
        const d = A2[i] - A1[i];
        res += d < 0 ? A1[i] : A2[i];
        if (d <= 0) k--;
        else A3.push(d);
    }
    if (k <= 0) return res;
    A3 = new Uint32Array(A3).sort();
    while (~--k) res -= A3[k];
    return res;
}
