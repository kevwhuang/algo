// 3091 - Apply Operations to Make Sum of Array Greater Than or Equal to K

function minOperations(k) {
    let adds = 0, prev = Infinity;
    while (true) {
        const mults = Math.ceil(k / (adds + 1)) - 1;
        if (mults > prev - 1) return adds + prev - 1;
        adds++, prev = mults;
    }
}
