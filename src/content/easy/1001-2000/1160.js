// 1160 - Find Words That Can Be Formed by Characters

function countCharacters(words, chars) {
    const B1 = new Uint8Array(26);
    for (let i = 0; i < chars.length; i++) {
        B1[chars.charCodeAt(i) - 97]++;
    }
    let res = 0;
    const B2 = new Uint8Array(26);
    for (let i = 0; i < words.length; i++) {
        B2.fill(0);
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            B2[s.charCodeAt(j) - 97]++;
        }
        if (B1.every((e, i) => e >= B2[i])) res += s.length;
    }
    return res;
}
