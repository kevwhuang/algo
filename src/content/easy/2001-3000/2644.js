// 2644 - Find the Maximum Divisibility Score

function maxDivScore(nums, divisors) {
    let min = Infinity, maxScore = -Infinity;
    for (let i = 0; i < divisors.length; i++) {
        const cur = divisors[i];
        let score = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % cur === 0) score++;
        }
        if (score === maxScore && cur < min) min = cur;
        else if (score > maxScore) min = cur, maxScore = score;
    }
    return min;
}
