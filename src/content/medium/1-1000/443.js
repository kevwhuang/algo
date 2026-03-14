// 443 - String Compression

function compress(chars) {
    let res = 0, i = 0;
    while (i < chars.length) {
        let acc = 1;
        while (i + 1 < chars.length && chars[i] === chars[i + 1]) acc++, i++;
        chars[res++] = chars[i++];
        if (acc === 1) continue;
        acc = String(acc);
        let j = 0;
        while (j < acc.length) chars[res++] = acc[j++];
    }
    return res;
}
