// 1345 - Jump Game IV

function minJumps(arr) {
    const map = new Map(), n = arr.length - 1;
    if (n === 0) return 0;
    arr.forEach((e, i) => map.has(e) ? map.get(e).push(i) : map.set(e, [i]));
    const seen = new Uint8Array(n + 1).fill(1, 0, 1);
    let acc = 1, Q = [0];
    while (true) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const j = Q[i];
            if (j && seen[j - 1] < 1) {
                seen[j - 1] = 1;
                N.push(j - 1);
            }
            if (j < n && seen[j + 1] < 1) {
                seen[j + 1] = 1;
                N.push(j + 1);
                if (j + 1 === n) return acc;
            }
            const next = map.get(arr[j]);
            if (!next) continue;
            map.set(arr[j], null);
            for (let j = 0; j < next.length; j++) {
                const k = next[j];
                if (seen[k]) continue;
                seen[k] = 1;
                N.push(k);
                if (k === n) return acc;
            }
        }
        acc++, Q = N;
    }
}
