// 3687 - Library Late Fee Calculator

function lateFee(daysLate) {
    let res = 0, i = -1;
    while (++i < daysLate.length) {
        if (daysLate[i] < 2) res++;
        else res += (daysLate[i] < 6 ? 2 : 3) * daysLate[i];
    }
    return res;
}
