// 949 - Largest Time for Given Digits

function largestTimeFromDigits(arr) {
    const permutations = [
        `${arr[0]}${arr[1]}:${arr[2]}${arr[3]}`,
        `${arr[0]}${arr[1]}:${arr[3]}${arr[2]}`,
        `${arr[0]}${arr[2]}:${arr[1]}${arr[3]}`,
        `${arr[0]}${arr[2]}:${arr[3]}${arr[1]}`,
        `${arr[0]}${arr[3]}:${arr[1]}${arr[2]}`,
        `${arr[0]}${arr[3]}:${arr[2]}${arr[1]}`,
        `${arr[1]}${arr[0]}:${arr[2]}${arr[3]}`,
        `${arr[1]}${arr[0]}:${arr[3]}${arr[2]}`,
        `${arr[1]}${arr[2]}:${arr[0]}${arr[3]}`,
        `${arr[1]}${arr[2]}:${arr[3]}${arr[0]}`,
        `${arr[1]}${arr[3]}:${arr[0]}${arr[2]}`,
        `${arr[1]}${arr[3]}:${arr[2]}${arr[0]}`,
        `${arr[2]}${arr[0]}:${arr[1]}${arr[3]}`,
        `${arr[2]}${arr[0]}:${arr[3]}${arr[1]}`,
        `${arr[2]}${arr[1]}:${arr[0]}${arr[3]}`,
        `${arr[2]}${arr[1]}:${arr[3]}${arr[0]}`,
        `${arr[2]}${arr[3]}:${arr[0]}${arr[1]}`,
        `${arr[2]}${arr[3]}:${arr[1]}${arr[0]}`,
        `${arr[3]}${arr[0]}:${arr[1]}${arr[2]}`,
        `${arr[3]}${arr[0]}:${arr[2]}${arr[1]}`,
        `${arr[3]}${arr[1]}:${arr[0]}${arr[2]}`,
        `${arr[3]}${arr[1]}:${arr[2]}${arr[0]}`,
        `${arr[3]}${arr[2]}:${arr[0]}${arr[1]}`,
        `${arr[3]}${arr[2]}:${arr[1]}${arr[0]}`,
    ];
    let time = '';
    for (let i = 0; i < 24; i++) {
        const t = permutations[i];
        if (t[0] + t[1] > 23 || t[3] + t[4] > 59) continue;
        if (t > time) time = t;
    }
    return time;
}
