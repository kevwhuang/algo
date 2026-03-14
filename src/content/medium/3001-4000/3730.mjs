// 3730 - Maximum Calories Burnt From Jumps

function maxCaloriesBurnt(heights) {
    let res = 0, prev = 0, l = 0, r = heights.length - 1;
    const arr = new Uint32Array(heights).sort();
    while (l <= r) {
        res += (arr[r] - prev) ** 2, prev = arr[r--];
        res += (arr[l] - prev) ** 2, prev = arr[l++];
    }
    return res;
}
