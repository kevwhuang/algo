// 2094 - Finding 3-Digit Even Numbers

function findEvenNumbers(digits) {
    const freqs = new Array(10).fill(0);
    for (let i = 0; i < digits.length; i++) {
        freqs[digits[i]]++;
    }
    const res = [];
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            for (let k = 0; k <= 8; k += 2) {
                freqs[i]--, freqs[j]--, freqs[k]--;
                if (freqs[i] >= 0 && freqs[j] >= 0 && freqs[k] >= 0) {
                    res.push(Number(`${i}${j}${k}`));
                }
                freqs[i]++, freqs[j]++, freqs[k]++;
            }
        }
    }
    return res;
}
