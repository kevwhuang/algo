// 1338 - Reduce Array Size to the Half

function minSetSize(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    const freqs = Object.values(obj).sort((a, b) => b - a);
    const tgt = arr.length / 2;
    let i = 0, removed = 0;
    while (true) {
        removed += freqs[i++];
        if (removed >= tgt) return i;
    }
}
