// 2748 - Number of Beautiful Pairs

function countBeautifulPairs(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let pairs = 0;
    const safe = new Set([1, 5, 7]);
    for (let i = 0; i < nums.length; i++) {
        let digit1;
        while (nums[i]) {
            digit1 = nums[i] % 10;
            nums[i] = nums[i] / 10 >> 0;
        }
        if (digit1 === 1) {
            pairs += nums.length - i - 1;
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            const digit2 = nums[j] % 10;
            if (digit1 === digit2) continue;
            if (digit1 % 2 === 0 && digit2 % 2 === 0) continue;
            if (safe.has(digit2) || gcd(digit1, digit2) === 1) pairs++;
        }
    }
    return pairs;
}
