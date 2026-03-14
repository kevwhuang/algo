// 84 - Largest Rectangle in Histogram

function largestRectangleArea(heights) {
    heights.push(0);
    let res = 0, i = -1;
    const S = [-1];
    while (++i < heights.length) {
        while (S.length >= 2 && heights[S.at(-1)] >= heights[i]) {
            res = Math.max(heights[S.pop()] * (i - S.at(-1) - 1), res);
        }
        S.push(i);
    }
    return res;
}
