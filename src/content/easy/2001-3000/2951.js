// 2951 - Find the Peaks

function findPeaks(mountain) {
    const indices = [];
    for (let i = 1; i < mountain.length - 1; i++) {
        if (mountain[i - 1] >= mountain[i]) continue;
        if (mountain[i] <= mountain[i + 1]) continue;
        indices.push(i);
    }
    return indices;
}
