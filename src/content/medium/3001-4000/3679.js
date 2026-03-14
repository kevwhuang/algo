// 3679 - Minimum Discards to Balance Inventory

function minArrivalsToDiscard(arrivals, w, m) {
    if (!this.B) B = new Uint32Array(100001), arr = new Uint8Array(100000);
    B.fill(0, 0, Math.max(...arrivals) + 1);
    arr.fill(1, 0, arrivals.length);
    let res = 0, i = -1;
    while (++i < arrivals.length) {
        if (B[arrivals[i]] < m) B[arrivals[i]]++;
        else res++, arr[i] = 0;
        if (i >= w - 1 && arr[i - w + 1]) B[arrivals[i - w + 1]]--;
    }
    return res;
}
