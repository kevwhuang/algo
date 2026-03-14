// 3703 - Remove K-Balanced Substrings

function removeSubstring(s, k) {
    const S1 = [], S2 = [];
    for (let i = 0; i < s.length; i++) {
        if (S1.at(-1) === s[i]) S2[S2.length - 1]++;
        else S1.push(s[i]) && S2.push(1);
        if (S1.at(-2) !== '(' || S1.at(-1) !== ')') continue;
        if (S2.at(-2) >= k && S2.at(-1) === k) S1.pop() && S2.pop();
        else continue;
        S2[S2.length - 1] -= k;
        if (S2.at(-1) < 1) S1.pop() && S2.pop();
    }
    return S1.reduce((s, e, i) => s + e.repeat(S2[i]), '');
}
