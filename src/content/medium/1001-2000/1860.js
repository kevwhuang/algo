// 1860 - Incremental Memory Leak

function memLeak(memory1, memory2) {
    let t = 0;
    while (++t) {
        if (memory1 >= memory2) {
            if (memory1 < t) return [t, memory1, memory2];
            memory1 -= t;
        } else {
            if (memory2 < t) return [t, memory1, memory2];
            memory2 -= t;
        }
    }
}
