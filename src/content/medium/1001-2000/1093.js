// 1093 - Statistics From a Large Sample

function sampleStats(count) {
    let min, max, mode = 0, samples = 0, sum = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] === 0) continue;
        if (min === undefined) min = i;
        max = i;
        if (count[i] > count[mode]) mode = i;
        samples += count[i];
        sum += i * count[i];
    }
    let mid1, mid2, running1 = 0, running2 = 0;
    const target1 = Math.round(samples / 2);
    const target2 = samples % 2 ? target1 : target1 + 1;
    for (let i = 0; mid1 === undefined || mid2 === undefined; i++) {
        running1 += count[i];
        running2 += count[i];
        if (mid1 === undefined && running1 >= target1) mid1 = i;
        if (mid2 === undefined && running2 >= target2) mid2 = i;
    }
    const mean = sum / samples;
    const median = (mid1 + mid2) / 2;
    return [min, max, mean, median, mode];
}
