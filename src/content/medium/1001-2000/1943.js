// 1943 - Describe the Painting

function splitPainting(segments) {
    const mark = new Array(100002).fill(0);
    const ends = new Uint8Array(100002);
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        mark[segment[0]] += segment[2];
        mark[segment[1]] -= segment[2];
        ends[segment[0]] = ends[segment[1]] = 1;
    }
    const painting = [];
    let prefix = 0, start;
    for (let i = 1; i < 100002; i++) {
        if (ends[i]) {
            if (prefix) painting.push([start, i, prefix]);
            start = i;
        }
        prefix += mark[i];
    }
    return painting;
}
