// 1177 - Can Make Palindrome From Substring

function canMakePaliQueries(s, queries) {
    const prefix = new Uint32Array(s.length);
    prefix[0] = 1 << s.charCodeAt(0) - 97;
    for (let i = 1; i < s.length; i++) {
        prefix[i] = prefix[i - 1] ^ 1 << s.charCodeAt(i) - 97;
    }
    for (let i = 0; i < queries.length; i++) {
        let mask = prefix[queries[i][0] - 1] ?? 0;
        mask ^= prefix[queries[i][1]];
        let odds = 0;
        while (mask) {
            if (mask & 1) odds++;
            mask >>= 1;
        }
        queries[i] = odds <= 2 * queries[i][2] + 1;
    }
    return queries;
}
