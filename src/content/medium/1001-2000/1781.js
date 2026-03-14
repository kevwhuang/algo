// 1781 - Sum of Beauty of All Substrings

function beautySum(s) {
    let sum = 0;
    for (let i = 0, len = s.length; i < len - 2; i++) {
        const freqs = new Array(26).fill(0);
        let max = 1;
        for (let j = i; j < len; j++) {
            const code = s.charCodeAt(j) - 97;
            max = Math.max(++freqs[code], max);
            let min = 500;
            for (let k = 0; k < 26; k++) {
                if (freqs[k] === 0) continue;
                min = Math.min(freqs[k], min);
            }
            sum += max - min;
        }
    }
    return sum;
}
