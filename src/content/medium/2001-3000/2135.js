// 2135 - Count Words Obtained After Adding a Letter

function wordCount(startWords, targetWords) {
    function getMask(word) {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            mask |= 1 << word.charCodeAt(i) - 97;
        }
        return mask;
    }
    const set = new Set();
    for (let i = 0; i < startWords.length; i++) {
        set.add(getMask(startWords[i]));
    }
    let strings = 0;
    for (let i = 0; i < targetWords.length; i++) {
        let bit = .5;
        const mask = getMask(targetWords[i]);
        while (bit < mask) {
            bit *= 2;
            if (!(mask & bit)) continue;
            if (!set.has(mask - bit)) continue;
            strings++;
            break;
        }
    }
    return strings;
}
