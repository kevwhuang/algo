// 1522 - Diameter of N-Ary Tree

function diameter(root) {
    function dfs(node) {
        if (!node) return 0;
        let max1 = 0, max2 = 0;
        for (let i = 0; i < node.children.length; i++) {
            const dist = dfs(node.children[i]);
            if (dist > max1) {
                max2 = max1;
                max1 = dist;
            } else if (dist > max2) {
                max2 = dist;
            }
        }
        diameter = Math.max(max1 + max2, diameter);
        return max1 + 1;
    }
    let diameter = 0;
    dfs(root);
    return diameter;
}
