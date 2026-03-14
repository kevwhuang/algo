// 2282 - Number of People That Can Be Seen in a Grid

function seePeople(heights) {
    function count(stack, r, c) {
        while (stack.length && stack.at(-1) < heights[r][c]) {
            res[r][c]++;
            stack.pop();
        }
        if (stack.length) res[r][c]++;
        if (stack.at(-1) === heights[r][c]) return;
        stack.push(heights[r][c]);
    }
    const m = heights.length, n = heights[0].length;
    const res = Array.from({ length: m }, () => new Uint16Array(n));
    for (let r = 0; r < m; r++) {
        const stack = [];
        for (let c = n - 1; ~c; c--) {
            count(stack, r, c);
        }
    }
    for (let c = 0; c < n; c++) {
        const stack = [];
        for (let r = m - 1; ~r; r--) {
            count(stack, r, c);
        }
    }
    return res;
}
