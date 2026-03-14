// 3842 - Toggle Light Bulbs

function toggleLightBulbs(bulbs) {
    const res = [], B = new Uint8Array(101);
    bulbs.forEach(e => B[e]++);
    B.forEach((e, i) => e % 2 && res.push(i));
    return res;
}
