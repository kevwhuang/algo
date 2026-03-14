// 2614 - Prime in Diagonal

function diagonalPrime(nums) {
    function isPrime(num) {
        if (num === 2) return true;
        if (num === 1 || num % 2 === 0) return false;
        const sqrt = Math.sqrt(num);
        for (let n = 3; n <= sqrt; n += 2) {
            if (num % n === 0) return false;
        }
        return true;
    }
    let max = 0;
    for (let r = 0; r < nums.length; r++) {
        let num = nums[r][r];
        if (num > max && isPrime(num)) max = num;
        num = nums[nums.length - r - 1][r];
        if (num > max && isPrime(num)) max = num;
    }
    return max;
}
