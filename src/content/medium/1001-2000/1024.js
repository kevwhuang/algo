// 1024 - Video Stitching

function videoStitching(clips, time) {
    let count = 0, cur = 0;
    while (cur < time) {
        let next = -1;
        for (let i = 0; i < clips.length; i++) {
            if (cur < clips[i][0] || clips[i][1] < cur) continue;
            next = Math.max(clips[i][1], next);
            clips[i][0] = 1000;
        }
        if (next === -1) return -1;
        count++, cur = next;
    }
    return count;
}
