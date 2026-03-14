// 1523 - Count Odd Numbers in an Interval Range

function countOdds(low, high) {
    const count = high - low >> 1;
    return low % 2 || high % 2 ? count + 1 : count;
}
