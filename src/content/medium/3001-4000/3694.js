// 3694 - Distinct Points Reachable After Substring Removal

function distinctPoints(s, k) {
    const set = new Set();
    let acc1 = 0, acc2 = 0, i = -1;
    while (++i < s.length) {
        let t = s[i];
        if (t === 'U') acc1++;
        else if (t === 'D') acc1--;
        else if (t === 'L') acc2++;
        else acc2--;
        if (i < k - 1) continue;
        set.add(100000 * acc1 + acc2);
        t = s[i - k + 1];
        if (t === 'U') acc1--;
        else if (t === 'D') acc1++;
        else if (t === 'L') acc2--;
        else acc2++;
    }
    return set.size;
}
