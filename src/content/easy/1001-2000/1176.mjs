// 1176 - Diet Plan Performance

function dietPlanPerformance(calories, k, lower, upper) {
    let acc = 0;
    for (let i = 0; i < k; i++) {
        acc += calories[i];
    }
    let res = acc < lower ? -1 : acc > upper ? 1 : 0;
    for (let i = k; i < calories.length; i++) {
        acc += calories[i] - calories[i - k];
        if (acc < lower) res--;
        else if (acc > upper) res++;
    }
    return res;
}
