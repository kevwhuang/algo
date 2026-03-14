// 2456 - Most Popular Video Creator

function mostPopularCreator(creators, ids, views) {
    const map = new Map();
    let max = -Infinity;
    for (let i = 0; i < creators.length; i++) {
        if (!map.has(creators[i])) map.set(creators[i], [0, , -1]);
        const cur = map.get(creators[i]);
        max = Math.max(cur[0] += views[i], max);
        if (views[i] === cur[2] && ids[i].localeCompare(cur[1]) === -1) {
            cur[1] = ids[i], cur[2] = views[i];
        } else if (views[i] > cur[2]) {
            cur[1] = ids[i], cur[2] = views[i];
        }
    }
    const res = [];
    for (const creator of map.keys()) {
        if (map.get(creator)[0] < max) continue;
        res.push([creator, map.get(creator)[1]]);
    }
    return res;
}
