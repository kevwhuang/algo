// 873 - Length of Longest Fibonacci Subsequence

function lenLongestFibSubseq(arr) {
    const dp = new Map(), set = new Set(arr), k = 1e9;
    for (let i = 2; i < arr.length; i++) {
        const c = arr[i];
        for (let j = 1; j < i; j++) {
            const b = arr[j], a = c - b;
            if (a >= b || !set.has(a)) continue;
            dp.set(k * b + c, (dp.get(k * a + b) ?? 2) + 1);
        }
    }
    return Math.max(0, ...dp.values());
}
