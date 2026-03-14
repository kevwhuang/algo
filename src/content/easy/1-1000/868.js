// 868 - Binary Gap

function binaryGap(n) {
    n = n.toString(2);
    let gap = n.includes('11') ? 1 : 0;
    let i = 0, len;
    while (i++ < n.length) {
        if (len && n[i] === '0') {
            len++;
        } else if (len && n[i] === '1') {
            gap = Math.max(len, gap);
            len = null;
        } else if (!len && n[i] === '0') {
            len = 2;
        }
    }
    return gap;
}
