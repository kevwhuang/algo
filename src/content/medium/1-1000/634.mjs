// 634 - Find the Derangement of an Array

function findDerangement(n) {
    if (n === 1) return 0;
    let a = 0, b = 1, i = 2;
    while (i < n) {
        const next = i++ * (a + b) % 1000000007;
        a = b, b = next;
    }
    return b;
}
