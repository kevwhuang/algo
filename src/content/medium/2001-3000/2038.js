// 2038 - Remove Colored Pieces If Both Neighbors Are the Same Color

function winnerOfGame(colors) {
    let alice = 0, bob = 0, i = 0;
    while (i < colors.length) {
        let count = 0;
        const cur = colors[i];
        while (colors[i] === cur) { count++; i++; }
        if (count <= 2) continue;
        if (cur === 'A') alice += count - 2;
        else bob += count - 2;
    }
    return alice > bob;
}
