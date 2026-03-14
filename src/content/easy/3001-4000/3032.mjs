// 3032 - Count Numbers With Unique Digits II

function numberCount(a, b) {
    let res = 0;
    while (a <= b) {
        let cur = a++, acc = 0;
        const set = new Set();
        while (cur) {
            set.add(cur % 10);
            cur = cur / 10 >> 0, acc++;
        }
        if (acc === set.size) res++;
    }
    return res;
}
