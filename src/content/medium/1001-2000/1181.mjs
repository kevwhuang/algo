// 1181 - Before and After Puzzle

function beforeAndAfterPuzzles(phrases) {
    for (let i = 0; i < phrases.length; i++) {
        phrases[i] = phrases[i].split(' ');
    }
    const set = new Set();
    for (let i = 0; i < phrases.length; i++) {
        for (let j = 0; j < phrases.length; j++) {
            if (i === j) continue;
            if (phrases[i].at(-1) !== phrases[j][0]) continue;
            let merged = phrases[i].join(' ');
            if (phrases[j].length > 1) merged += ' ';
            merged += phrases[j].slice(1).join(' ');
            set.add(merged);
        }
    }
    return [...set].sort();
}
