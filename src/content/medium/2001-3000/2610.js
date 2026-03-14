// 2610 - Convert an Array Into a 2D Array With Conditions

function findMatrix(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    const mat = [];
    while (map.size) {
        const row = [];
        for (const e of map) {
            row.push(e[0]);
            if (e[1] > 1) map.set(e[0], e[1] - 1);
            else map.delete(e[0]);
        }
        mat.push(row);
    }
    return mat;
}
