// 3185 - Count Pairs That Form a Complete Day II

function countCompleteDayPairs(hours) {
    const bucket = new Array(24).fill(0);
    for (let i = 0; i < hours.length; i++) {
        bucket[hours[i] % 24]++;
    }
    let pairs = bucket[0] * (bucket[0] - 1) / 2;
    pairs += bucket[12] * (bucket[12] - 1) / 2;
    for (let mod = 1; mod < 12; mod++) {
        pairs += bucket[mod] * bucket[24 - mod];
    }
    return pairs;
}
