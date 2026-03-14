// 2507 - Smallest Value After Replacing With Sum of Prime Factors

function smallestValue(n) {
    const primes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
        67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
        139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
        223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
        293, 307, 311, 313,
    ];
    while (true) {
        let sum = 0, dividend = n;
        const bound = Math.sqrt(n);
        for (let i = 0; i < 65; i++) {
            const divisor = primes[i];
            if (divisor > bound) break;
            while (dividend % divisor === 0) {
                sum += divisor;
                dividend /= divisor;
            }
        }
        if (dividend >= 2) sum += dividend;
        if (sum === n) return n;
        n = sum;
    }
}
