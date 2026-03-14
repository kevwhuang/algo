// 3668 - Restore Finishing Order

function recoverOrder(order, friends) {
    const res = new Uint8Array(friends.length), set = new Set(friends);
    for (let i = 0, j = 0; i < order.length; i++) {
        if (set.has(order[i])) res[j++] = order[i];
    }
    return res;
}
