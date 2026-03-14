// 646 - Maximum Length of Pair Chain

function findLongestChain(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    let max = 0, end = -Infinity;
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0] <= end) continue;
        max++, end = pairs[i][1];
    }
    return max;
}
