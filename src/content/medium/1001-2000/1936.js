// 1936 - Add Minimum Number of Rungs

function addRungs(rungs, dist) {
    let count = dist < rungs[0] ? (rungs[0] - 1) / dist >> 0 : 0;
    for (let i = 1; i < rungs.length; i++) {
        if (rungs[i - 1] + dist >= rungs[i]) continue;
        count += (rungs[i] - rungs[i - 1] - 1) / dist >> 0;
    }
    return count;
}
