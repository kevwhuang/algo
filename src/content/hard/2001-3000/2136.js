// 2136 - Earliest Possible Day of Full Bloom

function earliestFullBloom(plantTime, growTime) {
    const arr = Array.from({ length: growTime.length }, (_, i) => i);
    arr.sort((a, b) => growTime[b] - growTime[a]);
    let res = 0, acc = 0, i = -1;
    while (++i < arr.length) {
        acc += plantTime[arr[i]];
        res = Math.max(acc + growTime[arr[i]], res);
    }
    return res;
}
