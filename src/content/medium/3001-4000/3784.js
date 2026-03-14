// 3784 - Minimum Deletion Cost to Make All Characters Equal

function minCost(s, cost) {
    const A = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        A[s.charCodeAt(i) - 97] += cost[i];
    }
    let res = Infinity;
    const sum = A.reduce((s, e) => s + e);
    for (let i = 0; i < 26; i++) {
        res = Math.min(sum - A[i], res);
    }
    return res;
}
