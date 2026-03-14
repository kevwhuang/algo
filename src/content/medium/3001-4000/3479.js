// 3479 - Fruits Into Baskets III

function numOfUnplacedFruits(fruits, baskets) {
    const n = 2 ** Math.ceil(Math.log2(baskets.length));
    const tree = new Uint32Array(2 * n);
    baskets.forEach((e, i) => tree[i + n] = e);
    for (let i = n - 1; i; i--) {
        tree[i] = Math.max(tree[2 * i], tree[2 * i + 1]);
    }
    let res = 0;
    for (let i = 0; i < fruits.length; i++) {
        const cur = fruits[i];
        if (tree[1] < cur && ++res) continue;
        let j = 1;
        while (j < n) j *= 2, j += tree[j] < cur;
        tree[j] = 0;
        while (j > 1) {
            j >>= 1;
            const max = Math.max(tree[2 * j], tree[2 * j + 1]);
            if (tree[j] === max) break;
            tree[j] = max;
        }
    }
    return res;
}
