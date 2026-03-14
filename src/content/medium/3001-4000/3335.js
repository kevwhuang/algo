// 3335 - Total Characters in String After Transformations I

function lengthAfterTransformations(s, t) {
    function init() {
        memo = new Int32Array(100001).fill(-1);
        memo.forEach((_, i) => recurse(i));
    }
    function recurse(i) {
        if (i < 0) return -1;
        if (~memo[i]) return memo[i];
        return memo[i] = (recurse(i - 25) + recurse(i - 26) + 2) % 1000000007;
    }
    if (this.memo === undefined) init();
    let len = s.length;
    for (let i = 0; i < s.length; i++) {
        const idx = s.charCodeAt(i) + t - 123;
        if (idx >= 0) len = (len + memo[idx] + 1) % 1000000007;
    }
    return len;
}
