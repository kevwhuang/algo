// 2021 - Brightest Position on Street

function brightestPosition(lights) {
    const n = lights.length;
    const start = new Int32Array(n);
    const end = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        start[i] = lights[i][0] - lights[i][1];
        end[i] = lights[i][0] + lights[i][1] + 1;
    }
    start.sort();
    end.sort();
    let res, cur = 0, max = 0, i = 0, j = 0;
    while (i < n) {
        while (start[i] < end[j]) {
            if (++cur > max) res = start[i], max = cur;
            i++;
        }
        while (start[i] === end[j]) i++, j++;
        while (start[i] > end[j]) cur--, j++;
    }
    return res;
}
