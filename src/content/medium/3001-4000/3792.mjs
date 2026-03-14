// 3792 - Sum of Increasing Product Blocks

function sumOfBlocks(n) {
    function init() {
        dict = new Uint32Array(1001);
        for (let cur = 1, i = 1; i < 1001; i++) {
            let prod = 1, j = 0;
            while (++j <= i) prod = prod * cur++ % 1000000007;
            dict[i] = (dict[i - 1] + prod) % 1000000007;
        }
    }
    if (!this.dict) init();
    return dict[n];
}
