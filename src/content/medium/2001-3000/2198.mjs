// 2198 - Number of Single Divisor Triplets

function singleDivisorTriplet(nums) {
    const bucket = new Array(101).fill(0);
    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]]++;
    }
    let triplets = 0;
    for (let a = 1; a < 101; a++) {
        if (bucket[a] === 0) continue;
        for (let b = a; b < 101; b++) {
            if (bucket[b] === 0) continue;
            for (let c = b; c < 101; c++) {
                if (bucket[c] === 0) continue;
                if (a === b && b === c) continue;
                const sum = a + b + c;
                let divisors = 0;
                if (sum % a === 0) divisors++;
                if (sum % b === 0) divisors++;
                if (sum % c === 0) divisors++;
                if (divisors !== 1) continue;
                if (a === b) {
                    triplets += bucket[c] * bucket[b] * (bucket[b] - 1) / 2;
                } else if (b === c) {
                    triplets += bucket[a] * bucket[b] * (bucket[b] - 1) / 2;
                } else {
                    triplets += bucket[a] * bucket[b] * bucket[c];
                }
            }
        }
    }
    return 6 * triplets;
}
