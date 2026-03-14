// 347 - Top K Frequent Elements

function topKFrequent(nums, k) {
    const B = new Map();
    nums.forEach(e => B.set(e, (B.get(e) ?? 0) + 1));
    const M = [];
    for (const e of B) {
        M[e[1]] ??= [];
        M[e[1]].push(e[0]);
    }
    const res = new Int16Array(k);
    for (let i = M.length - 1, j = 0; j < k; i--) {
        while (i && !M[i]) i--;
        M[i].forEach(e => res[j++] = e);
    }
    return res;
}
