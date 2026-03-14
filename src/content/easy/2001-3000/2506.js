// 2506 - Count Pairs of Similar Strings

function similarPairs(words) {
    const n = words.length;
    for (let i = 0; i < n; i++) {
        words[i] = [...new Set(words[i])].sort().join('');
    }
    let pairs = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (words[i] === words[j]) pairs++;
        }
    }
    return pairs;
}
