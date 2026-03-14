// 3265 - Count Almost Equal Pairs I

function countPairs(nums) {
    nums = new Uint32Array(nums).sort();
    let count = 0;
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i], freq = obj[num] ?? 0;
        count += freq;
        obj[num] = freq + 1;
        for (let r = 1; r <= num; r *= 10) {
            const b = parseInt(num / r) % 10;
            for (let l = 10 * r; l <= num; l *= 10) {
                const a = parseInt(num / l) % 10;
                if (a === b) continue;
                count += obj[num + a * (r - l) + b * (l - r)] ?? 0;
            }
        }
    }
    return count;
}
