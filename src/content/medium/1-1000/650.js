// 650 - 2 Keys Keyboard

function minSteps(n) {
    let ops = 0, cur = 1, copy = 0;
    while (cur < n) {
        if (n % cur === 0) ops++, copy = cur;
        ops++, cur += copy;
    }
    return ops;
}
