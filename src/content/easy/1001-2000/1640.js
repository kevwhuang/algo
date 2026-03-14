// 1640 - Check Array Formation Through Concatenation

function canFormArray(arr, pieces) {
    const map = new Map();
    for (let i = 0; i < pieces.length; i++) {
        map.set(pieces[i][0], pieces[i]);
    }
    let i = 0;
    while (i < arr.length) {
        const cur = map.get(arr[i]);
        if (!cur) return false;
        for (let j = 0; j < cur.length; i++, j++) {
            if (cur[j] !== arr[i]) return false;
        }
    }
    return true;
}
