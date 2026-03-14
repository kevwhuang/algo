// 1578 - Minimum Time to Make Rope Colorful

function minCost(colors, neededTime) {
    let time = 0;
    const lim = colors.length - 1;
    for (let i = 0; i < lim; i++) {
        let acc = neededTime[i], max = acc;
        while (i < lim && colors[i] === colors[i + 1]) {
            acc += neededTime[++i];
            max = Math.max(neededTime[i], max);
        }
        time += acc - max;
    }
    return time;
}
