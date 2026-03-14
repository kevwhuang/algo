// 2955 - Number of Same-End Substrings

function sameEndSubstringCount(s, queries) {
    const bucket = new Uint16Array(26);
    const prefix = new Array(s.length + 1);
    prefix[0] = new Uint8Array(26);
    for (let i = 0; i < s.length; i++) {
        bucket[s.charCodeAt(i) - 97]++;
        prefix[i + 1] = new Uint16Array(bucket);
    }
    for (let i = 0; i < queries.length; i++) {
        let substrings = 0;
        const start = prefix[queries[i][0]];
        const end = prefix[queries[i][1] + 1];
        for (let j = 0; j < 26; j++) {
            const n = end[j] - start[j];
            substrings += (1 + n) * n / 2;
        }
        queries[i] = substrings;
    }
    return queries;
}
