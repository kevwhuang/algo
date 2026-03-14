// 2125 - Number of Laser Beams in a Bank

function numberOfBeams(banks) {
    let beams = 0, prev, cur;
    for (let r = 0; r < banks.length; r++) {
        cur = 0;
        for (let c = 0; c < banks[0].length; c++) {
            banks[r][c] === '1' && cur++;
        }
        if (cur) {
            if (prev) beams += prev * cur;
            prev = cur;
        }
    }
    return beams;
}
