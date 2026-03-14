// 1090 - Largest Values From Labels

function largestValsFromLabels(values, labels, numWanted, useLimit) {
    for (let i = 0; i < values.length; i++) {
        values[i] = [values[i], labels[i]];
    }
    values.sort((a, b) => b[0] - a[0]);
    let score = 0;
    const map = new Map();
    for (let i = 0; i < values.length && numWanted; i++) {
        const freq = map.get(values[i][1]) + 1 || 1;
        if (freq > useLimit) continue;
        score += values[i][0];
        map.set(values[i][1], freq);
        numWanted--;
    }
    return score;
}
