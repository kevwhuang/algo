// 2744 - Find Maximum Number of String Pairs

function maximumNumberOfStringPairs(words) {
    let pairs = 0;
    const set = new Set();
    for (let i = 0; i < words.length; i++) {
        const rvs = words[i][1] + words[i][0];
        if (set.has(rvs)) {
            set.delete(rvs);
            pairs++;
        } else {
            set.add(words[i]);
        }
    }
    return pairs;
}
