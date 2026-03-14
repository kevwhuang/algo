// 3090 - Maximum Length Substring With Two Occurrences

function maximumLengthSubstring(s) {
    let max = 2;
    for (let i = 0; i < s.length; i++) {
        const B = new Uint8Array(26);
        let j = i;
        while (j < s.length && ++B[s.charCodeAt(j) - 97] < 3) j++;
        max = Math.max(j - i, max);
    }
    return max;
}
