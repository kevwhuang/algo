// 3085 - Minimum Deletions to Make String K-Special

function minimumDeletions(word, k) {
    const bucket = new Uint32Array(26);
    for (let i = 0; i < word.length; i++) {
        bucket[word.charCodeAt(i) - 97]++;
    }
    let min = Infinity;
    for (let i = 0; i < 26; i++) {
        const a = bucket[i];
        let deletions = 0;
        for (let j = 0; j < 26; j++) {
            const b = bucket[j];
            deletions += a <= b ? Math.max(0, b - a - k) : b;
        }
        min = Math.min(deletions, min);
    }
    return min;
}
