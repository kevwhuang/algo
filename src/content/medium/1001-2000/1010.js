// 1010 - Pairs of Songs With Total Durations Divisible by 60

function numPairsDivisibleBy60(time) {
    let pairs = 0;
    const mods = new Uint16Array(60);
    for (let i = 0; i < time.length; i++) {
        const mod = time[i] % 60;
        pairs += mods[(60 - mod) % 60];
        mods[mod]++;
    }
    return pairs;
}
