// 202 - Happy Number

function isHappy(n) {
    const seen = new Set();
    while (!seen.has(n)) {
        seen.add(n);
        let sum = 0, cur = n;
        while (cur) sum += (cur % 10) ** 2, cur = cur / 10 >> 0;
        if (sum === 1) return true;
        n = sum;
    }
    return false;
}
