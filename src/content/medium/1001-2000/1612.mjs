// 1612 - Check If Two Expression Trees Are Equivalent

function checkEquivalence(root1, root2) {
    function dfs(node, freqs) {
        if (!node) return;
        if (node.val !== '+') freqs[node.val.charCodeAt(0) - 97]++;
        dfs(node.left, freqs);
        dfs(node.right, freqs);
    }
    const freqs1 = new Array(26).fill(0);
    dfs(root1, freqs1);
    const freqs2 = new Array(26).fill(0);
    dfs(root2, freqs2);
    for (let i = 0; i < 26; i++) {
        if (freqs1[i] !== freqs2[i]) return false;
    }
    return true;
}
