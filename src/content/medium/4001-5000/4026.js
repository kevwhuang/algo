// 4026. Maximum Gap Between Stations

function maximumGap(skill, station) {
    const n = skill.length, A = new Uint32Array(n);
    for (let i = 0, j = 0; i < n; j++) {
        if (skill[i] === station[j]) A[i++] = j;
    }
    let res = 0;
    for (let i = n - 1, j = station.length - 1; ~i; j--) {
        if (skill[i] === station[j] && i--) res = Math.max(j - A[i], res);
    }
    return res;
}
