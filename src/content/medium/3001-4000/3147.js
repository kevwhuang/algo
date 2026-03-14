// 3147 - Taking Maximum Energy From the Mystic Dungeon

function maximumEnergy(energy, k) {
    let max = -Infinity;
    const bound = energy.length - k;
    for (let i = energy.length - 1; i >= bound; i--) {
        let acc = 0;
        for (let j = i; j >= 0; j -= k) {
            acc += energy[j];
            max = Math.max(acc, max);
        }
    }
    return max;
}
