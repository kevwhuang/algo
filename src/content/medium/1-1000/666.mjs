// 666. Path Sum IV

function pathSum(nums) {
    function dfs(node, acc) {
        if (!map.has(node)) return 0;
        acc += map.get(node);
        const pos = node % 10;
        const depth = node - pos + 10;
        const left = dfs(depth + 2 * pos - 1, acc);
        const right = dfs(depth + 2 * pos, acc);
        if (left + right === 0) sum += acc;
    }
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i] / 10 >> 0, nums[i] % 10);
    }
    let sum = 0;
    dfs(11, 0);
    return sum;
}
