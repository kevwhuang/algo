// 833 - Find and Replace in String

function findReplaceString(s, indices, sources, targets) {
    const res = s.split('');
    for (let i = 0; i < indices.length; i++) {
        const start = indices[i];
        if (!s.startsWith(sources[i], start)) continue;
        res[start] = targets[i];
        const bound = start + sources[i].length;
        for (let j = start + 1; j < bound; j++) {
            res[j] = '';
        }
    }
    return res.join('');
}
