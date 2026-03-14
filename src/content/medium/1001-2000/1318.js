// 1318 - Minimum Flips to Make A or B Equal to C

function minFlips(a, b, c) {
    let flips = 0;
    while (c) {
        if (c & 1) {
            if (!(a & 1) && !(b & 1)) flips++;
        } else {
            if (a & 1 || b & 1) flips++;
            if (a & 1 && b & 1) flips++;
        }
        a >>>= 1;
        b >>>= 1;
        c >>>= 1;
    }
    while (a) {
        if (a & 1) flips++;
        a >>>= 1;
    }
    while (b) {
        if (b & 1) flips++;
        b >>>= 1;
    }
    return flips;
}
