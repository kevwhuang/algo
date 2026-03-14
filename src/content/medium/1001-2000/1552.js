// 1552 - Magnetic Force Between Two Balls

function maxDistance(position, m) {
    const pos = new Uint32Array(position).sort();
    let l = 1, r = Math.ceil(pos.at(-1) - pos[0] / (m - 1));
    while (l <= r) {
        const gap = l + r >> 1;
        let balls = 0, i = 0;
        while (i < pos.length && ++balls < m) {
            const start = pos[i++];
            while (i < pos.length && start + gap > pos[i]) i++;
        }
        if (balls === m) l = gap + 1;
        else r = gap - 1;
    }
    return l - 1;
}
