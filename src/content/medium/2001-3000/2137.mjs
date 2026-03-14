// 2137 - Pour Water Between Buckets to Make Water Levels Equal

function equalizeWater(buckets, loss) {
    let l = 0, r = Math.max(...buckets);
    const k = 1 - loss / 100;
    while (r - l > .00001) {
        const m = (l + r) / 2;
        let add = 0, rem = 0;
        for (let i = 0; i < buckets.length; i++) {
            const water = buckets[i];
            if (water <= m) add += m - water;
            else rem += water - m;
        }
        if (add <= k * rem) l = m;
        else r = m;
    }
    return l;
}
