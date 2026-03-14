// 1056 - Confusing Number

function confusingNumber(n) {
    n = n.toString();
    let res = false;
    const dict = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6' };
    for (let i = 0; i < n.length; i++) {
        if (!dict[n[i]]) return false;
        if (dict[n[i]] !== n[n.length - i - 1]) res = true;
    }
    return res;
}
