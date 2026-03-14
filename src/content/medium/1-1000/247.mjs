// 247 - Strobogrammatic Number II

function findStrobogrammatic(n) {
    function backtrack(cur) {
        if (cur.length > bound) {
            let tail = '';
            for (let i = cur.length - 1 - isOdd; ~i; i--) {
                tail += obj[cur[i]];
            }
            return res.push(cur + tail);
        }
        if (cur.length) backtrack(cur + '0');
        backtrack(cur + '1');
        backtrack(cur + '8');
        if (cur.length === bound && isOdd) return;
        backtrack(cur + '6');
        backtrack(cur + '9');
    }
    if (n === 1) return ['0', '1', '8'];
    const res = [];
    const obj = { 0: '0', 1: '1', 6: 9, 8: '8', 9: '6' };
    const bound = Math.ceil(n / 2) - 1;
    const isOdd = n % 2;
    backtrack('');
    return res;
}
