// 1394 - Find Lucky Integer in an Array

function findLucky(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i]) + 1 || 1);
    }
    let int = -1;
    for (const e of map.entries()) {
        if (e[0] === e[1]) int = Math.max(e[0], int);
    }
    return int;
}
