// 1550 - Three Consecutive Odds

function threeConsecutiveOdds(arr) {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] % 2 + arr[i - 1] % 2 + arr[i] % 2 === 3) return true;
    }
    return false;
}
