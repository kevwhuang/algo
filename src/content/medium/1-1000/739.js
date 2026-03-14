// 739 - Daily Temperatures

function dailyTemperatures(temperatures) {
    const res = new Uint32Array(temperatures.length);
    const S = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (S.length && temperatures[S.at(-1)] < temperatures[i]) {
            res[S.at(-1)] = i - S.pop();
        }
        S.push(i);
    }
    return res;
}
