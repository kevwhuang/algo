// 2865 - Beautiful Towers I

function maximumSumOfHeights(heights) {
    function traverse(i, inc, lim) {
        let acc = 0;
        while (~i && i < heights.length) {
            lim = Math.min(heights[i], lim);
            acc += lim;
            i += inc;
        }
        return acc;
    }
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        let sum = heights[i];
        sum += traverse(i - 1, -1, heights[i]);
        sum += traverse(i + 1, 1, heights[i]);
        max = Math.max(sum, max);
    }
    return max;
}
