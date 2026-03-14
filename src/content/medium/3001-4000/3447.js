// 3447 - Assign Elements to Groups With Constraints

function assignElements(groups, elements) {
    const max = groups.reduce((s, e) => Math.max(e, s));
    const min = groups.reduce((s, e) => Math.min(e, s));
    const arr = new Int32Array(max - min + 1).fill(-1);
    const set = new Set();
    for (let i = 0; i < elements.length; i++) {
        const d = elements[i];
        if (set.has(d)) continue;
        set.add(d);
        for (let j = Math.ceil(min / d) * d; j <= max; j += d) {
            if (arr[j - min] === -1) arr[j - min] = i;
        }
    }
    groups.forEach((e, i) => groups[i] = arr[e - min]);
    return groups;
}
