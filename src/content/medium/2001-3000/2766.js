// 2766 - Relocate Marbles

function relocateMarbles(nums, moveFrom, moveTo) {
    const set = new Set(nums);
    for (let i = 0; i < moveFrom.length; i++) {
        if (moveFrom[i] === moveTo[i]) continue;
        set.add(moveTo[i]);
        set.delete(moveFrom[i]);
    }
    return new Uint32Array(set).sort();
}
