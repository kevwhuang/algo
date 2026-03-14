// 508 - Most Frequent Subtree Sum

function findFrequentTreeSum(root) {
    function dfs(node) {
        if (!node) return 0;
        const sum = node.val + dfs(node.left) + dfs(node.right);
        const freq = (map.get(sum) || 0) + 1;
        map.set(sum, freq);
        maxFreq = Math.max(freq, maxFreq);
        return sum;
    }
    const map = new Map();
    let maxFreq = 0;
    dfs(root);
    const res = [];
    for (const e of map.entries()) {
        if (e[1] === maxFreq) res.push(e[0]);
    }
    return res;
}
