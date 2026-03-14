// 2182 - Construct String With Repeat Limit

function repeatLimitedString(s, repeatLimit) {
    const bucket = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        bucket[s.charCodeAt(i) - 97]++;
    }
    let res = '', i = 25;
    while (true) {
        while (i >= 0 && bucket[i] === 0) i--;
        if (i === -1) break;
        const reps = Math.min(bucket[i], repeatLimit);
        res += String.fromCharCode(i + 97).repeat(reps);
        bucket[i] -= reps;
        if (bucket[i] === 0) continue;
        let j = i - 1;
        while (j >= 0 && bucket[j] === 0) j--;
        if (j === -1) break;
        res += String.fromCharCode(j + 97);
        bucket[j]--;
    }
    return res;
}
