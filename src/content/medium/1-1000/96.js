// 96 - Unique Binary Search Trees

function numTrees(n) {
    let trees = 1;
    for (let k = 2; k <= n; k++) {
        trees *= (n + k) / k;
    }
    return trees;
}
