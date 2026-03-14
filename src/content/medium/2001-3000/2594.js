// 2594 - Minimum Time to Repair Cars

function repairCars(ranks, cars) {
    const min = Math.min(...ranks);
    let l = min * Math.ceil(cars / ranks.length) ** 2;
    let r = min * cars ** 2;
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        let repaired = 0;
        for (let i = 0; i < ranks.length; i++) {
            repaired += Math.floor(Math.sqrt(m / ranks[i]));
        }
        if (repaired < cars) l = m + 1;
        else r = m;
    }
    return r;
}
