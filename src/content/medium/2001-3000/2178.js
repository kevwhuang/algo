// 2178 - Maximum Split of Positive Even Integers

function maximumEvenSplit(finalSum) {
    if (finalSum & 1) return [];
    const res = [];
    let n = 0;
    while (finalSum > 0) {
        n += 2;
        finalSum -= n;
        res.push(n);
    }
    const last = res.length - 1;
    res[last] -= Math.abs(finalSum);
    if (res.length > 1 && res[last] <= res[last - 1]) {
        res[last - 1] += res.pop();
    }
    return res;
}
