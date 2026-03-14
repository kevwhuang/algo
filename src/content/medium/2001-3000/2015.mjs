// 2015 - Average Height of Buildings in Each Segment

function averageHeightOfBuildings(buildings) {
    const arr = [];
    for (let i = 0; i < buildings.length; i++) {
        arr.push([buildings[i][0], buildings[i][2]]);
        arr.push([buildings[i][1], -buildings[i][2]]);
    }
    arr.sort((a, b) => a[0] - b[0]);
    const street = [];
    let f = 0, acc = 0, i = 0;
    while (i < arr.length) {
        const l = arr[i][0];
        while (i < arr.length && arr[i][0] === l) {
            arr[i][1] > 0 ? f++ : f--;
            acc += arr[i++][1];
        }
        if (f === 0) continue;
        const tail = street.at(-1), r = arr[i][0], avg = acc / f >> 0;
        if (tail && tail[1] === l && tail[2] === avg) tail[1] = r;
        else street.push([l, r, avg]);
    }
    return street;
}
