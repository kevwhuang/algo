// 3168 - Minimum Number of Chairs in a Waiting Room

function minimumChairs(s) {
    let min = 0, acc = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') --acc;
        else min = Math.max(++acc, min);
    }
    return min;
}
