// 3692 - Majority Frequency Characters

function majorityFrequencyGroup(s) {
    const B1 = new Uint8Array(26);
    for (let i = 0; i < s.length; i++) {
        B1[s.charCodeAt(i) - 97]++;
    }
    const B2 = new Map();
    for (let i = 0; i < 26; i++) {
        if (B1[i]) B2.set(B1[i], (B2.get(B1[i]) ?? 0) + 1);
    }
    let tgt = 0;
    const max = Math.max(...B2.values());
    for (const e of B2) {
        if (e[1] === max) tgt = Math.max(e[0], tgt);
    }
    let res = '';
    for (let i = 0; i < 26; i++) {
        if (B1[i] === tgt) res += String.fromCharCode(i + 97);
    }
    return res;
}
