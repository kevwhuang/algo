// 2957 - Remove Adjacent Almost-Equal Characters

function removeAlmostEqualCharacters(word) {
    let ops = 0, i = 0;
    while (++i < word.length) {
        const code1 = word.charCodeAt(i - 1);
        const code2 = word.charCodeAt(i);
        if (Math.abs(code1 - code2) > 1) continue;
        ops++, i++;
    }
    return ops;
}
