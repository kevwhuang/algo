// 3079 - Find the Sum of Encrypted Integers

function sumOfEncryptedInt(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let max = 0, acc = 0, cur = nums[i];
        while (cur) max = Math.max(cur % 10, max), acc++, cur = cur / 10 >> 0;
        while (acc) res += max, max *= 10, acc--;
    }
    return res;
}
