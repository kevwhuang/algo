// 3468 - Find the Number of Copy Arrays

function countArrays(original, bounds) {
    let left = bounds[0][0], right = bounds[0][1], i = 0;
    while (++i < original.length) {
        const d = original[i] - original[i - 1];
        left = Math.max(bounds[i][0], left + d);
        right = Math.min(bounds[i][1], right + d);
        if (left > right) return 0;
    }
    return right - left + 1;
}
