// 853 - Car Fleet

function carFleet(target, position, speed) {
    const res = [];
    for (let i = 0; i < position.length; i++) {
        const tgt = (target - position[i]) / speed[i];
        let j = res.length;
        while (~--j && res[j][0] <= position[i]) {
            if (res[j][1] <= tgt) res.splice(j, 1);
        }
        if (~j && res[j][1] >= tgt) continue;
        res.splice(j + 1, 0, [position[i], tgt]);
    }
    return res.length;
}
