// 3561 - Resulting String After Adjacent Removals

function resultingString(s) {
    if (!this.S) S = new Uint8Array(100000);
    let res = '', i = -1, j = -1;
    while (++i < s.length) {
        const abs = Math.abs(~j ? S[j] - s.charCodeAt(i) : 0);
        if (abs === 1 || abs === 25) j--;
        else S[++j] = s.charCodeAt(i);
    }
    while (~j) res = String.fromCharCode(S[j--]) + res;
    return res;
}
