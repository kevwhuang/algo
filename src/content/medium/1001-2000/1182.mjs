// 1182 - Shortest Distance to Target Color

function shortestDistanceColor(colors, queries) {
    const arr = [null, [], [], []];
    for (let i = 0; i < colors.length; i++) {
        arr[colors[i]].push(i);
    }
    for (let i = 0; i < queries.length; i++) {
        const idx = queries[i][0];
        const indices = arr[queries[i][1]], n = indices.length;
        let l = 0, r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (indices[m] < idx) l = m + 1;
            else r = m - 1;
        }
        let min = Infinity;
        if (l) min = Math.min(idx - indices[l - 1], min);
        if (l < n) min = Math.min(indices[l] - idx, min);
        queries[i] = min === Infinity ? -1 : min;
    }
    return queries;
}
