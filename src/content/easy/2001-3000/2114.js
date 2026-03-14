// 2114 - Maximum Number of Words Found in Sentences

function mostWordsFound(sentences) {
    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        const cur = sentences[i];
        let count = 1;
        for (let j = 0; j < cur.length; j++) {
            if (cur[j] === ' ') count++;
        }
        max = Math.max(count, max);
    }
    return max;
}
