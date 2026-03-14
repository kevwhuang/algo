// 3184 - Count Pairs That Form a Complete Day I

function countCompleteDayPairs(hours) {
    let res = 0;
    for (let i = 0; i < hours.length; i++) {
        for (let j = i + 1; j < hours.length; j++) {
            if ((hours[i] + hours[j]) % 24 === 0) res++;
        }
    }
    return res;
}
