// 1375 - Number of Times Binary String Is Prefix-Aligned

function numTimesAllBlue(flips) {
    let count = 0;
    for (let i = 0, sum1 = 0, sum2 = 0; i < flips.length; i++) {
        sum1 += i + 1;
        sum2 += flips[i];
        if (sum1 === sum2) count++;
    }
    return count;
}
