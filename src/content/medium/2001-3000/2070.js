// 2070 - Most Beautiful Item for Each Query

function maximumBeauty(items, queries) {
    items.sort((a, b) => a[0] - b[0]);
    let max = -Infinity;
    for (let i = 0; i < items.length; i++) {
        max = Math.max(items[i][1], max);
        items[i][1] = max;
    }
    for (let i = 0; i < queries.length; i++) {
        const target = queries[i];
        let index, l = 0, r = items.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (items[m][0] > target) r = m - 1;
            else l = (index = m) + 1;
        }
        queries[i] = index >= 0 ? items[index][1] : 0;
    }
    return queries;
}
