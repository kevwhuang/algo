// 1258 - Synonymous Sentences

function generateSentences(synonyms, text) {
    function backtrack(i) {
        if (i === text.length) return res.push(text.join(' '));
        const word = text[i];
        if (!uf[word]) return backtrack(i + 1);
        const children = parents[uf[word]];
        for (let j = 0; j < children.length; j++) {
            text[i] = children[j];
            backtrack(i + 1);
            text[i] = word;
        }
    }
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    text = text.split(' ');
    const uf = {};
    for (let i = 0; i < synonyms.length; i++) {
        const [w1, w2] = synonyms[i];
        uf[w1] ??= w1, uf[w2] ??= w2;
        uf[find(w1)] = find(w2);
    }
    const parents = {};
    Object.keys(uf).forEach(e => parents[find(e)] ??= []);
    Object.keys(uf).forEach(e => parents[uf[e]].push(e));
    Object.values(parents).forEach(e => e.sort());
    const res = [];
    backtrack(0);
    return res;
}
