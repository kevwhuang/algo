// 2534 - Time Taken to Cross the Door

function timeTaken(arrival, state) {
    const arr1 = [], arr2 = [];
    state.forEach((e, i) => (e ? arr2 : arr1).push(i));
    const res = new Uint32Array(state.length), m = arr1.length, n = arr2.length;
    let prev, cur = 0, i = 0, j = 0;
    while (i < m && j < n) {
        const a = arrival[arr1[i]], b = arrival[arr2[j]];
        if (prev === 0 && cur >= a) res[arr1[i++]] = cur++;
        else if (prev === 1 && cur >= b) res[arr2[j++]] = cur++;
        else if (a < b) prev = 0, cur = (res[arr1[i++]] = Math.max(cur, a)) + 1;
        else prev = 1, cur = (res[arr2[j++]] = Math.max(cur, b)) + 1;
    }
    while (i < m) cur = (res[arr1[i]] = Math.max(cur, arrival[arr1[i++]])) + 1;
    while (j < n) cur = (res[arr2[j]] = Math.max(cur, arrival[arr2[j++]])) + 1;
    return res;
}
