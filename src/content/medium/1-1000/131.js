// 131 - Palindrome Partitioning

function partition(s) {
    function backtrack(i) {
        if (i === s.length) res.push([...cur]);
        for (let j = i; j < s.length; j++) {
            let l = i, r = j;
            while (l < r && s[l] === s[r]) l++, r--;
            if (l < r) continue;
            cur.push(s.slice(i, j + 1));
            backtrack(j + 1);
            cur.pop();
        }
    }
    const res = [], cur = [];
    backtrack(0);
    return res;
}
