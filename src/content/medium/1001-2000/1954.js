// 1954 - Minimum Garden Perimeter to Collect Enough Apples

function minimumPerimeter(neededApples) {
    const count = x => 4 * x * x * x + 6 * x * x + 2 * x;
    let l = 1, r = 62996;
    while (l < r) {
        const m = l + r >> 1;
        if (count(m) < neededApples) l = m + 1;
        else r = m;
    }
    return 8 * r;
}
