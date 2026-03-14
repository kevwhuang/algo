// 884 - Uncommon Words From Two Sentences

function uncommonFromSentences(s1, s2) {
    function generateSet(s) {
        const set = new Set();
        let pos = 0;
        while (true) {
            const space = s.indexOf(' ', pos);
            let word, willBreak = false;
            if (space > 0) word = s.slice(pos, space);
            else {
                word = s.slice(pos);
                willBreak = true;
            }
            if (!duplicates.has(word)) {
                if (!set.has(word)) set.add(word);
                else {
                    duplicates.add(word);
                    set.delete(word);
                }
            }
            if (willBreak) break;
            else pos += space - pos + 1;
        }
        return set;
    }
    const duplicates = new Set();
    const set1 = generateSet(s1);
    const set2 = generateSet(s2);
    const uncommon = [];
    for (const word of set1.keys()) {
        !set2.has(word) && !duplicates.has(word) && uncommon.push(word);
    }
    for (const word of set2.keys()) {
        !set1.has(word) && !duplicates.has(word) && uncommon.push(word);
    }
    return uncommon;
}
