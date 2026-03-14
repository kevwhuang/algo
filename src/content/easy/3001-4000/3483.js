// 3483 - Unique 3-Digit Even Numbers

function totalNumbers(digits) {
    const set = new Set(), n = digits.length;
    for (let i = 0; i < n; i++) {
        if (digits[i] === 0) continue;
        const a = 100 * digits[i];
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            const b = 10 * digits[j];
            for (let k = 0; k < n; k++) {
                if (i === k || j === k) continue;
                if (digits[k] % 2) continue;
                set.add(a + b + digits[k]);
            }
        }
    }
    return set.size;
}
