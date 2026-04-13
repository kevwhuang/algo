// 3889. Mirror Frequency Distance

function mirrorFrequency(s) {
    const B1 = new Uint32Array(10), B2 = new Uint32Array(26);
    for (let i = 0; i < s.length; i++) {
        if (s[i] < 'a') B1[Number(s[i])]++;
        else B2[s.charCodeAt(i) - 97]++;
    }
    let res = 0;
    for (let i = 0; i < 5; i++) {
        res += Math.abs(B1[i] - B1[9 - i]);
    }
    for (let i = 0; i < 13; i++) {
        res += Math.abs(B2[i] - B2[25 - i]);
    }
    return res;
}
