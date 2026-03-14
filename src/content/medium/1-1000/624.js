// 624 - Maximum Distance in Arrays

function maxDistance(arrays) {
    let distance = -Infinity, min = Infinity, max = -Infinity;
    for (let i = 0; i < arrays.length; i++) {
        const first = arrays[i][0];
        const last = arrays[i][arrays[i].length - 1];
        distance = Math.max(last - min, max - first, distance);
        min = Math.min(first, min);
        max = Math.max(last, max);
    }
    return distance;
}
