// 2103 - Rings and Rods

function countPoints(rings) {
    const arr = new Array(10).fill('');
    for (let i = 1; i < rings.length; i += 2) {
        if (arr[rings[i]].includes(rings[i - 1])) continue;
        arr[rings[i]] += rings[i - 1];
    }
    return arr.reduce((s, e) => e.length === 3 ? s + 1 : s, 0);
}
