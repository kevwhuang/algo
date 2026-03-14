// 3746 - Minimum String Length After Balanced Removals

function minLengthAfterRemovals(s) {
    let acc = 0, i = -1;
    while (++i < s.length) if (s[i] === 'a') acc++;
    return Math.abs(2 * acc - s.length);
}
