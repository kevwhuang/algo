// 681 - Next Closest Time

function nextClosestTime(time) {
    let res, min = Infinity;
    const digits = [+time[0], +time[1], +time[3], +time[4]];
    time = +time.slice(0, 2) * 60 + +time.slice(3);
    for (let i = 0; i < 4; i++) {
        const h1 = digits[i];
        if (h1 >= 3) continue;
        for (let j = 0; j < 4; j++) {
            const h2 = digits[j];
            if (h1 === 2 && h2 >= 4) continue;
            for (let k = 0; k < 4; k++) {
                const m1 = digits[k];
                if (m1 >= 6) continue;
                for (let l = 0; l < 4; l++) {
                    const m2 = digits[l];
                    const cur = (h1 * 10 + h2) * 60 + (m1 * 10 + m2);
                    let delta = cur - time;
                    if (cur <= time) delta += 1440;
                    if (delta >= min) continue;
                    res = `${h1}${h2}:${m1}${m2}`;
                    min = delta;
                }
            }
        }
    }
    return res;
}
