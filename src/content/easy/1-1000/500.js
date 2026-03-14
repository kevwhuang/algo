// 500 - Keyboard Row

function findWords(words) {
    const res = [];
    const set1 = new Set('QWERTYUIOPqwertyuiop');
    const set2 = new Set('ASDFGHJKLasdfghjkl');
    const set3 = new Set('ZXCVBNMzxcvbnm');
    for (let i = 0; i < words.length; i++) {
        const s = words[i];
        const set = set1.has(s[0]) ? set1 : set2.has(s[0]) ? set2 : set3;
        let j = 0;
        while (++j < s.length) if (!set.has(s[j])) j = Infinity;
        if (j < Infinity) res.push(s);
    }
    return res;
}
