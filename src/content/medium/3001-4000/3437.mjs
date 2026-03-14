// 3437 - Permutations III

function permute(n) {
    function backtrack(i, mask) {
        if (i === n) return res.push([...cur]);
        for (let j = cur[i - 1] & 1 ? 2 : 1; j <= n; j += 2) {
            if (dict[j] & mask) continue;
            cur[i] = j;
            backtrack(i + 1, dict[j] | mask);
        }
    }
    const res = [], cur = new Array(n);
    const dict = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    for (let i = 1; i <= n; i++) {
        cur[0] = i;
        backtrack(1, dict[i]);
    }
    return res;
}
