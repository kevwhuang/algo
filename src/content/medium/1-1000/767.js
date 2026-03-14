// 767 - Reorganize String

function reorganizeString(s) {
    const bucket = {};
    for (let i = 0; i < s.length; i++) {
        bucket[s[i]] = 1 + bucket[s[i]] || 1;
    }
    let res = '', prev;
    while (res.length < s.length) {
        let max = 0, next;
        for (const char in bucket) {
            if (char === prev) continue;
            if (bucket[char] <= max) continue;
            max = bucket[char];
            next = char;
        }
        if (!next) return '';
        if (--bucket[next] === 0) delete bucket[next];
        res += next;
        prev = next;
    }
    return res;
}
