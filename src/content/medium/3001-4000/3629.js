// 3629 - Minimum Jumps to Reach End via Prime Teleportation

function minJumps(nums) {
    function init() {
        dict = new Uint32Array(1000001);
        for (let i = 2; i < 1000001; i++) {
            if (dict[i]) continue;
            dict[i] = i;
            for (let j = i * i; j < 1000001; j += i) {
                dict[j] = i;
            }
        }
    }
    if (!this.dict) init();
    const map = new Map(), n = nums.length, nn = n - 1;
    if (n === 1) return 0;
    nums.forEach(e => e === dict[e] && !map.has(e) && map.set(e, []));
    for (let i = 0; i < n; i++) {
        const arr = [];
        let cur = nums[i];
        while (cur > 1) {
            const mod = dict[cur];
            arr.push(mod);
            while (cur % mod === 0) cur /= mod;
        }
        arr.forEach(e => map.has(e) && map.get(e).push(i));
    }
    const seen = new Uint8Array(n);
    seen[0] = 1;
    let res = 1, Q = [0];
    while (true) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const j = Q[i];
            if (j + 1 === nn) return res;
            if (j + 1 < n && seen[j + 1] < 1) ++seen[j + 1] && N.push(j + 1);
            if (j && seen[j - 1] < 1) ++seen[j - 1] && N.push(j - 1);
            const arr = map.get(nums[j]);
            if (!arr) continue;
            for (let k = 0; k < arr.length; k++) {
                const next = arr[k];
                if (next === nn) return res;
                if (seen[next] < 1) ++seen[next] && N.push(next);
            }
            map.delete(nums[j]);
        }
        res++, Q = N;
    }
}
