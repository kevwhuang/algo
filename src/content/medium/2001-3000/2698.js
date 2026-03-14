// 2698 - Find the Punishment Number of an Integer

function punishmentNumber(n) {
    const valid = [
        1, 9, 10, 36, 45, 55, 82, 91, 99, 100, 235,
        297, 369, 370, 379, 414, 657, 675, 703, 756,
        792, 909, 918, 945, 964, 990, 991, 999, 1000,
    ];
    let punishment = 0, i = 0;
    while (i < valid.length && valid[i] <= n) {
        punishment += valid[i++] ** 2;
    }
    return punishment;
}
