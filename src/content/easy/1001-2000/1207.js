// 1207 - Unique Number of Occurrences

function uniqueOccurrences(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }
    return map.size === new Set(map.values()).size;
}
