// 3861 - Minimum Capacity Box

function minimumIndex(capacity, itemSize) {
    let res = -1;
    for (let i = 0; i < capacity.length; i++) {
        if (capacity[i] < itemSize) continue;
        if (res < 0 || capacity[i] < capacity[res]) res = i;
    }
    return res;
}
