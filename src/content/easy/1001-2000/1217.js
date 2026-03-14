// 1217 - Minimum Cost to Move Chips to the Same Position

function minCostToMoveChips(position) {
    let odd = 0;
    for (let i = 0; i < position.length; i++) {
        if (position[i] & 1) odd++;
    }
    return Math.min(odd, position.length - odd);
}
