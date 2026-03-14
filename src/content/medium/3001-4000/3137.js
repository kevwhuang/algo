// 3137 - Minimum Number of Operations to Make Word K-Periodic

function minimumOperationsToMakeKPeriodic(word, k) {
    const map = new Map();
    for (let i = 0; i < word.length; i += k) {
        const slice = word.slice(i, i + k);
        map.set(slice, (map.get(slice) ?? 0) + 1);
    }
    return word.length / k - Math.max(...map.values());
}
