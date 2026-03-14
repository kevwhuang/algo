// 1921 - Eliminate Maximum Number of Monsters

function eliminateMaximum(dist, speed) {
    const n = dist.length;
    const time = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        const arrival = Math.ceil(dist[i] / speed[i]);
        if (arrival < n) time[arrival]++;
    }
    let running = 0;
    for (let i = 0; i < n; i++) {
        if (time[i] + running > i) return i;
        running += time[i];
    }
    return n;
}
