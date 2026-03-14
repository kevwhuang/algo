// 3458 - Select K Disjoint Special Substrings

function maxSubstringLength(s, k) {
    const arr1 = new Array(26), arr2 = new Array(26);
    for (let i = 0; i < s.length; i++) {
        const key = s.charCodeAt(i) - 97;
        arr1[key] ??= i, arr2[key] = i;
    }
    const arr3 = [];
    for (let i = 0; i < 26; i++) {
        if (arr1[i] === undefined) continue;
        let max = arr2[i], j = arr1[i];
        while (++j <= max) {
            const key = s.charCodeAt(j) - 97;
            if (arr1[key] < arr1[i]) break;
            max = Math.max(arr2[key], max);
        }
        if (--j < arr2[i]) continue;
        if (arr1[i] === 0 && j === s.length - 1) continue;
        arr3.push([arr1[i], j]);
    }
    arr3.sort((a, b) => a[1] - b[1]);
    let res = 0, prev = -1, i = -1;
    while (++i < arr3.length) if (arr3[i][0] > prev) res++, prev = arr3[i][1];
    return res >= k;
}
