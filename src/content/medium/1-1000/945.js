// 945 - Minimum Increment to Make Array Unique

function minIncrementForUnique(nums) {
    const max = Math.max(...nums);
    const bucket = new Array(max + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]]++;
    }
    let moves = 0;
    for (let cur = 0, next = 0; cur <= max; cur++) {
        while (bucket[cur]-- > 1) {
            if (cur > next) next = cur + 1;
            while (bucket[next]) next++;
            moves += next - cur;
            next <= max ? bucket[next]++ : next++;
        }
    }
    return moves;
}
