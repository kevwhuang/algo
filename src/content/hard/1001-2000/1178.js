// 1178 - Number of Valid Words for Each Puzzle

function findNumOfValidWords(words, puzzles) {
    const B = new Map();
    for (let i = 0; i < words.length; i++) {
        let mask = 0, acc = 0;
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            const bit = 1 << s.charCodeAt(j) - 97;
            acc += mask & bit ? 0 : 1;
            mask |= bit;
        }
        if (acc <= 7) B.set(mask, (B.get(mask) ?? 0) + 1);
    }
    for (let i = 0; i < puzzles.length; i++) {
        let mask = 0;
        const s = puzzles[i];
        for (let j = 0; j < s.length; j++) {
            mask |= 1 << s.charCodeAt(j) - 97;
        }
        let acc = 0, cur = mask;
        const bit = 1 << s.charCodeAt(0) - 97;
        while (cur) {
            acc += cur & bit ? B.get(cur) ?? 0 : 0;
            cur = mask & (cur - 1);
        }
        puzzles[i] = acc;
    }
    return puzzles;
}
