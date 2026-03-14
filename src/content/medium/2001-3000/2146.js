// 2146 - K Highest Ranked Items Within a Price Range

function highestRankedKItems(grid, pricing, start, k) {
    function comparator(a, b) {
        return a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3];
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const cart = [];
    const [p1, p2] = pricing, [s1, s2] = start;
    const init = grid[s1][s2];
    if (p1 <= init && init <= p2) cart.push([0, init, s1, s2]);
    grid[s1][s2] = 0;
    let queue = [start], dist = 1;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const m = grid.length, n = grid[0].length;
    while (queue.length && cart.length < k) {
        const nextQueue = [];
        for (let i = 0; i < 4; i++) {
            const dr = dirs[i][0], dc = dirs[i][1];
            for (let j = 0; j < queue.length; j++) {
                const r = queue[j][0] + dr, c = queue[j][1] + dc;
                if (!validate(r, c)) continue;
                const cost = grid[r][c];
                if (cost === 0) continue;
                grid[r][c] = 0;
                if (p1 <= cost && cost <= p2) cart.push([dist, cost, r, c]);
                nextQueue.push([r, c]);
            }
        }
        queue = nextQueue;
        dist++;
    }
    cart.sort(comparator);
    const len = Math.min(k, cart.length);
    const items = new Array(len);
    for (let i = 0; i < len; i++) {
        items[i] = cart[i].slice(2);
    }
    return items;
}
