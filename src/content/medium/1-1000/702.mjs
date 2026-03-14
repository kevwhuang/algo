// 702 - Search in a Sorted Array of Unknown Size

function search(reader, target) {
    let l = 0, r = 1e4 - 1;
    while (l <= r) {
        const m = (l + r) >> 1;
        if (reader.get(m) < target) l = m + 1;
        else if (reader.get(m) > target) r = m - 1;
        else return m;
    }
    return -1;
}
