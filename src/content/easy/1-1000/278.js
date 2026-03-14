// 278 - First Bad Version

function solution(isBadVersion) {
    function find(n) {
        let l = 0, r = n;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (!isBadVersion(m)) l = m + 1;
            else r = m;
        }
        return l;
    }
    return find;
}
