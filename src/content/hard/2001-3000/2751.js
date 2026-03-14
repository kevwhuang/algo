// 2751 - Robot Collisions

function survivedRobotsHealths(positions, healths, directions) {
    const res = healths, S = [];
    const arr = Array.from({ length: res.length }, (_, i) => i);
    arr.sort((a, b) => positions[a] - positions[b]);
    for (let i = 0; i < arr.length; i++) {
        const j = arr[i];
        if (directions[j] === 'R' && S.push(j)) continue;
        while (res[j] && S.length) {
            const k = res[j] < res[S.at(-1)] ? S.at(-1) : S.pop();
            if (res[j] < res[k]) res[j] = 0, res[k]--;
            else if (res[j] > res[k]) res[j]--, res[k] = 0;
            else res[j] = res[k] = 0;
        }
    }
    return res.filter(Boolean);
}
