// 894 - All Possible Full Binary Trees

function allPossibleFBT(n) {
    function generate(n) {
        if (memo.has(n)) return memo.get(n);
        const trees = n === 1 ? [new TreeNode()] : [];
        if (n % 2) {
            for (let l = 0, r = n - 1; ~r; l++, r--) {
                for (const left of generate(l)) {
                    for (const right of generate(r)) {
                        trees.push(new TreeNode(0, left, right));
                    }
                }
            }
        }
        memo.set(n, trees);
        return trees;
    }
    const memo = new Map();
    return generate(n);
}
