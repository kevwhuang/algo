// 1311 - Get Watched Videos by Your Friends

function watchedVideosByFriends(watchedVideos, friends, id, level) {
    let queue = [id];
    const seen = new Set([id]);
    while (level--) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const neighbors = friends[queue[i]];
            for (let j = 0; j < neighbors.length; j++) {
                if (seen.has(neighbors[j])) continue;
                seen.add(neighbors[j]);
                nextQueue.push(neighbors[j]);
            }
        }
        queue = nextQueue;
    }
    const map = new Map();
    for (let i = 0; i < queue.length; i++) {
        const videos = watchedVideos[queue[i]];
        for (let j = 0; j < videos.length; j++) {
            map.set(videos[j], (map.get(videos[j]) ?? 0) + 1);
        }
    }
    const entries = [...map];
    entries.sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));
    const res = new Array(entries.length);
    for (let i = 0; i < res.length; i++) {
        res[i] = entries[i][0];
    }
    return res;
}
