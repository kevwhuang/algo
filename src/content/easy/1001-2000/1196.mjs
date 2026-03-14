// 1196 - How Many Apples Can You Put Into the Basket

function maxNumberOfApples(weight) {
    let acc = 0, i = 0;
    const arr = new Uint16Array(weight).sort();
    while (i < arr.length && arr[i] + acc <= 5000) acc += arr[i++];
    return i;
}
