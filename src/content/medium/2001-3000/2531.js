// 2531 - Make Number of Distinct Characters Equal

function isItPossible(word1, word2) {
    const bucket1 = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        bucket1[word1.charCodeAt(i) - 97]++;
    }
    const bucket2 = new Array(26).fill(0);
    for (let i = 0; i < word2.length; i++) {
        bucket2[word2.charCodeAt(i) - 97]++;
    }
    let distinct1 = 0, distinct2 = 0;
    for (let i = 0; i < 26; i++) {
        if (bucket1[i]) distinct1++;
        if (bucket2[i]) distinct2++;
    }
    if (distinct1 === distinct2) {
        for (let i = 0; i < 26; i++) {
            if (bucket1[i] && bucket2[i]) return true;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (bucket1[i] === 0) continue;
        for (let j = 0; j < 26; j++) {
            if (i === j) continue;
            if (bucket2[j] === 0) continue;
            const d1 = !bucket1[j] - (bucket1[i] === 1);
            const d2 = !bucket2[i] - (bucket2[j] === 1);
            if (distinct1 + d1 === distinct2 + d2) return true;
        }
    }
    return false;
}
