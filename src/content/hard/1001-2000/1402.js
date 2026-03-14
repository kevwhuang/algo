// 1402 - Reducing Dishes

function maxSatisfaction(satisfaction) {
    satisfaction = new Int16Array(satisfaction).sort();
    let res = 0, acc = 0, i = satisfaction.length;
    while (~--i) {
        acc += satisfaction[i];
        if (acc <= 0) break;
        res += acc;
    }
    return res;
}
