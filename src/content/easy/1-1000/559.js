// 559 - Maximum Depth of N-Ary Tree

function maxDepth(root) {
    if (!root) return 0;
    let max = 1;
    const next = root.children;
    for (let i = 0; i < next.length; i++) {
        max = Math.max(maxDepth(next[i]) + 1, max);
    }
    return max;
}
