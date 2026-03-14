// 2243 - Calculate Digit Sum of a String

function digitSum(s, k) {
    while (s.length > k) {
        let next = '', i = 0;
        while (i < s.length) {
            let sum = 0, j = i;
            const bound = Math.min(i + k, s.length);
            while (j < bound) sum += Number(s[j++]);
            next += sum, i += k;
        }
        s = next;
    }
    return s;
}
