// 2833 - Furthest Point From Origin

function furthestDistanceFromOrigin(moves) {
    const freqs = { _: 0, L: 0, R: 0 };
    for (let i = 0; i < moves.length; i++) {
        freqs[moves[i]]++;
    }
    return freqs._ + Math.abs(freqs.L - freqs.R);
}
