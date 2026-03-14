// 1925 - Count Square Sum Triples

function countTriples(n) {
    let res = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const sqrt = Math.sqrt(i * i + j * j);
            if (sqrt > n) break;
            if (Number.isInteger(sqrt)) res += 2;
        }
    }
    return res;
}
