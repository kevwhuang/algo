// 3998. Transform Binary String Using Subsequence Sort

function transformStr(s, strs) {
    let acc1 = 0, acc2 = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (s.charCodeAt(i) === 48) acc1++;
        else acc2++;
    }
    for (let i = 0; i < strs.length; i++) {
        let acc3 = acc1, acc4 = acc2, acc5 = 0;
        const t = strs[i];
        for (let j = 0; ~acc3 && ~acc4 && j < n; j++) {
            if (t.charCodeAt(j) === 48) acc3--;
            else if (t.charCodeAt(j) === 49) acc4--;
        }
        if (acc3 < 0 || acc4 < 0) acc5++;
        for (let j = 0; acc5 < 1 && j < n; j++) {
            if (s.charCodeAt(j) === 48) acc5++;
            if (t.charCodeAt(j) === 48) acc5--;
            else if (t.charCodeAt(j) === 63 && acc3) acc3--, acc5--;
        }
        strs[i] = acc5 < 1;
    }
    return strs;
}
