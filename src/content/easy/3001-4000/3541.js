// 3541 - Find Most Frequent Vowel and Consonant

function maxFreqSum(s) {
    let max1 = 0, max2 = 0, i = -1;
    const B = new Uint8Array(26);
    const dict = new Set([0, 4, 8, 14, 20]);
    while (++i < s.length) {
        const key = s.charCodeAt(i) - 97;
        if (dict.has(key)) max1 = Math.max(++B[key], max1);
        else max2 = Math.max(++B[key], max2);
    }
    return max1 + max2;
}
