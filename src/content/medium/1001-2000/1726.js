// 1726 - Tuple With Same Product

function tupleSameProduct(nums) {
    let tuples = 0;
    const len = nums.length, map = new Map();
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const product = nums[i] * nums[j];
            if (map.has(product)) {
                const count = map.get(product);
                tuples += 8 * count;
                map.set(product, count + 1);
            } else {
                map.set(product, 1);
            }
        }
    }
    return tuples;
}
