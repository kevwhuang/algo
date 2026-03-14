// 3557 - Find Maximum Number of Non-Intersecting Substrings

function maxSubstrings(word) {
    let res = 0, l = -1, r = -1;
    const arr = new Array(26).fill(-1);
    while (++r < word.length) {
        const key = word.charCodeAt(r) - 97;
        if (arr[key] < l || arr[key] < 0) arr[key] = r;
        else if (r - arr[key] >= 3 && ++res) l = r;
    }
    return res;
}
