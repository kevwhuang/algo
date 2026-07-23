// 3964. Minimum Lights to Illuminate a Road

function minLights(lights) {
    const n = lights.length, pre = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
        if (lights[i] === 0) continue;
        pre[Math.max(0, i - lights[i])]++;
        const min = Math.min(i + lights[i], n - 1);
        if (min + 1 < n) pre[min + 1]--;
    }
    for (let i = 1; i < n; i++) {
        pre[i] += pre[i - 1];
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (pre[i]) continue;
        if (i + 1 < n) pre[i + 1] = 1;
        if (i + 2 < n) pre[i + 2] = 1;
        res++;
    }
    return res;
}
